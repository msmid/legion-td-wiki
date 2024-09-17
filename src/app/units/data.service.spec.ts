import { TestBed } from '@angular/core/testing';
import ALL_UNITS from '@msmid/legion-td-db/src/units';
import {
  dwarvenEngineer,
  goblinScientist,
  groupFixture2,
  groupFixture3,
  mutant,
} from 'src/test/fixtures/unit.fixture';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  const fixture = [
    [ALL_UNITS[0], [ALL_UNITS[1]]],
    [ALL_UNITS[2], [ALL_UNITS[3]]],
  ];

  // 3 upgrades group
  // IE6uXLE

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
  });

  describe('#group', () => {
    it('returns groupped units', () => {
      const groupped = service.group();
      expect(groupped[0]).toEqual(groupFixture2);
    });

    it('number of groups is equal to number of base units', () => {
      const groupped = service.group();
      expect(groupped.length).toBe(service.baseUnits.length);
    });
  });

  describe('#findGroup', () => {
    it('returns group of base unit', () => {
      const group = service.findGroup(goblinScientist);
      expect(group).toEqual(groupFixture3);
    });

    it('returns group of middle unit', () => {
      const group = service.findGroup(dwarvenEngineer);
      expect(group).toEqual(groupFixture3);
    });

    it('returns group of final unit', () => {
      const group = service.findGroup(mutant);
      expect(group).toEqual(groupFixture3);
    });
  });

  describe('#findAllUpgrades', () => {
    it('finds all upgrades of base unit', () => {
      const baseUnit = groupFixture3[0];
      const group = service.findAllUpgrades(baseUnit);
      const groupNames = [...groupFixture3]
        .slice(1)
        .map(u => u.name)
        .join(', ');

      expect(group.map(g => g.name).join(', ')).toEqual(groupNames);
    });

    it('finds all upgrades of middle unit', () => {
      const unit = groupFixture3[1];
      const group = service.findAllUpgrades(unit);
      const groupNames = [...groupFixture3]
        .slice(2)
        .map(u => u.name)
        .join(', ');

      expect(group.map(g => g.name).join(', ')).toEqual(groupNames);
    });

    it('returns empty array if unit has no upgrades', () => {
      const unit = groupFixture3[2];
      const group = service.findAllUpgrades(unit);

      expect(group).toEqual([]);
    });
  });

  describe('#findPreviousUpgrade', () => {
    it('finds previous upgrades of the unit', () => {
      expect(service.findAllPreviousUpgrades(groupFixture3[2])).toEqual([
        groupFixture3[0],
        groupFixture3[1],
      ]);
    });
  });

  describe('#findNextUpgrades', () => {
    it('finds next upgrades of the unit', () => {
      expect(service.findNextUpgrades(groupFixture3[1])).toEqual([groupFixture3[2]]);
    });
  });

  describe('#findById', () => {
    it('finds unit by id', () => {
      expect(service.findById(ALL_UNITS[3].id)).toEqual(ALL_UNITS[3]);
    });
  });

  describe('#findByName', () => {
    it('finds unit by name', () => {
      expect(service.findByName(ALL_UNITS[3].name)).toEqual(ALL_UNITS[3]);
    });
  });

  it('has all units', () => {
    expect(service.units.length).toBe(181);
  });

  it('has only base units', () => {
    expect(service.baseUnits.length).toBe(84);
  });
});
