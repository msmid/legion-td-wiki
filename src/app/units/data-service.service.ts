import { Injectable } from '@angular/core';
import UNITS from '@msmid/legion-td-db/src/units';
import { Unit } from './unit.interface';

@Injectable()
export class DataServiceService {
  private _units: Unit[] = [];

  constructor() {
    console.log(UNITS[0]);
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

  search(key: string): Unit[] {
    const result = this._units.filter(unit => unit.name.includes(key));
    this._units = result;
    console.log(result);

    return result;
  }
}
