import { Injectable } from '@angular/core';
import UNITS from '@msmid/legion-td-db/src/units';
import { BuilderType } from './builder.declarations';
import { Unit } from './unit.interface';

@Injectable()
export class DataServiceService {
  private _units: Unit[] = [];

  constructor() {
    this.units = UNITS;
  }

  get units() {
    return this._units;
  }

  set units(units: Unit[]) {
    this._units = units;
  }

  get() {
    return this._units;
  }

  reset() {
    this.units = UNITS;
  }

  search({ searchTerm, builders }: { searchTerm: string; builders: BuilderType[] }): Unit[] {
    let result: Unit[] = [];

    if (builders.length > 0) {
      result = this._units.filter(unit => builders.some(b => b === unit.builder));
    } else {
      result = this._units;
    }

    if (searchTerm) {
      result = result.filter(unit => unit.name.toLowerCase().includes(searchTerm));
    }

    console.log(result);

    return result;
  }

  findUpgrades(unitName: string) {
    return this._units.find(u => u.name.toLowerCase() === unitName.toLowerCase());
  }
}
