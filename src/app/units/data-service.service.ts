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

  search({ key, builders }: { key: string; builders: BuilderType[] }): Unit[] {
    let result: Unit[] = [];

    if (builders.length > 0) {
      result = this._units.filter(unit => builders.some(b => b === unit.builder));
    } else {
      result = this._units;
    }

    if (key) {
      result = result.filter(unit => unit.name.includes(key));
    }

    return result;
  }
}
