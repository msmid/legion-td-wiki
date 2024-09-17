import ALL_UNITS from '@msmid/legion-td-db/src/units';
import { DataService } from 'src/app/units/data.service';
import { Unit } from 'src/app/units/unit.interface';

const service = new DataService();

export const unitFixture: Unit = ALL_UNITS[0];

export const tuskarr = service.findById('HlwkOll');
export const tuskarrSpearman = service.findById('wD7V92U');

export const goblinScientist = service.findById('IE6uXLE');
export const dwarvenEngineer = service.findById('CNhmas2');
export const mutant = service.findById('yhgPFpf');

export const druid = service.findById('pgj6iet');
export const swordMage = service.findById('94U2yve');
export const ascedant = service.findById('RQP6yHg');

export const groupFixture2: Unit[] = [tuskarr, tuskarrSpearman];
export const groupFixture3: Unit[] = [goblinScientist, dwarvenEngineer, mutant];
