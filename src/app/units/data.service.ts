import { Injectable } from '@angular/core';
import ALL_UNITS from '@msmid/legion-td-db/src/units';
import { Unit } from './unit.interface';

@Injectable()
export class DataService {
  private _units: Unit[] = ALL_UNITS;
  private _baseUnits: Unit[] = [];
  private _groups: Unit[][] = [];
  private _searchTerm = '';

  constructor() {
    this.baseUnits = this.findBaseUnits();
    this._groups = this.group();
  }

  set baseUnits(units: Unit[]) {
    this._baseUnits = units;
  }

  set searchTerm(term: string) {
    this._searchTerm = term;
  }

  get baseUnits() {
    return this._baseUnits;
  }

  get units() {
    return this._units;
  }

  get groups() {
    return this._groups;
  }

  get searchTerm() {
    return this._searchTerm;
  }

  search({ searchTerm }: { searchTerm: string }): Unit[] {
    let result: Unit[] = this._units;

    if (searchTerm) {
      result = result.filter(unit => unit.name.toLowerCase().includes(searchTerm));
    }

    console.log(result);

    return result;
  }

  searchInGroup(term?: string) {
    let result: Unit[][] = this._groups;

    if (term) {
      result = result.filter(group => {
        const searchIn = group
          .map(u => u.name)
          .join('')
          .toLowerCase();

        return searchIn.includes(term.toLowerCase());
      });
    }

    return result;
  }

  /**
   * Group unit upgrades together.
   *
   * A -> B -> C
   */
  group(units?: Unit[]): Array<Unit[]> {
    const result: Array<Unit[]> = [];
    const collection = units ?? this.baseUnits;

    collection.forEach(unit => {
      result.push([unit, ...this.findAllUpgrades(unit)]);
    });

    return result;
  }

  isBaseUnit(unit: Unit): boolean {
    return !unit.base_unit_name || unit.base_unit_name?.length === 0;
  }

  isFinalUpgrade(unit: Unit): boolean {
    return !!unit.base_unit_name && unit.base_unit_name.length != 0 && !unit.upgradeable;
  }

  hasUpgrade(unit: Unit): boolean {
    return !!unit.upgraded_name && unit.upgraded_name?.length > 0;
  }

  findGroup(unit: Unit): Unit[] {
    const group: Unit[] = [];
    if (this.isBaseUnit(unit)) {
      group.push(...[unit, ...this.findAllUpgrades(unit)]);
      return group;
    }

    if (this.isFinalUpgrade(unit)) {
      group.push(...[...this.findAllPreviousUpgrades(unit), unit]);
      return group;
    }

    const previous = this.findAllPreviousUpgrades(unit);
    const next = this.findAllUpgrades(unit);
    group.push(...[...previous, unit, ...next]);

    return group;
  }

  findBaseUnits(units?: Unit[]): Unit[] {
    if (units) {
      return units.filter(unit => !unit.base_unit_name || unit.base_unit_name?.length === 0);
    }
    return this._units.filter(unit => !unit.base_unit_name || unit.base_unit_name?.length === 0);
  }

  findAllUpgrades(unit: Unit): Unit[] {
    const upgrades: Array<Unit | undefined> = [];

    const find = (u: Unit) => {
      if (u.upgraded_name) {
        u.upgraded_name.map(name => {
          const upgrade = this.findByName(name);
          upgrades.push(upgrade);
          find(upgrade);
        });
      }
    };

    find(unit);

    return upgrades.filter(Boolean) as Unit[];
  }

  findNextUpgrades(unit: Unit): Unit[] {
    const upgrades: Array<Unit | undefined> = [];

    if (unit.upgraded_name && unit.upgraded_name.length > 0) {
      unit.upgraded_name.map(name => {
        upgrades.push(this._units.find(u => u.name.toLowerCase() === name.toLowerCase()));
      });
    }

    return upgrades.filter(Boolean) as Unit[];
  }

  /**
   * `base_unit_name` contains array of all previous unit. We don't have to
   * recursively search for previous upgrades by looking into each unit.
   *
   * Order of units is T1 -> T2 -> T3.
   */
  findAllPreviousUpgrades(unit: Unit): Unit[] {
    const upgrades: Array<Unit | undefined> = [];

    if (unit.base_unit_name && unit.base_unit_name.length > 0) {
      unit.base_unit_name.map(name => {
        upgrades.push(this._units.find(u => u.name.toLowerCase() === name.toLowerCase()));
      });
    }

    return upgrades.filter(Boolean) as Unit[];
  }

  findByName(name: string): Unit {
    const unit = this._units.find(unit => unit.name.toLowerCase() === name.toLowerCase());
    if (unit) {
      return unit;
    } else {
      throw new Error(`Unit not found: name: ${name}`);
    }
  }

  findById(id: string): Unit {
    const unit = this._units.find(unit => unit.id === id);
    if (unit) {
      return unit;
    } else {
      throw new Error(`Unit not found: id: ${id}`);
    }
  }

  findAllUpgradesByName(unitName: string): Unit[] {
    // Find unit by name
    const unit = this._units.find(u => u.name.toLowerCase() === unitName.toLowerCase());

    const upgrades: Array<Unit | undefined> = [];

    if (unit && unit.upgraded_name) {
      unit.upgraded_name.map(name => {
        upgrades.push(this._units.find(u => u.name.toLowerCase() === name.toLowerCase()));
      });
    }

    return upgrades.filter(Boolean) as Unit[];
  }
}
