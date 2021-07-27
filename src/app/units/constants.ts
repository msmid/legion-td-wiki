import { ArmorType, AttackType } from './unit.interface';

export const ARMOR_EFFECTIVENESS: Record<ArmorType, number> = {
  unarmored: 0,
  light: 0,
  medium: 0,
  heavy: 0,
  fortified: 0,
};

export const ATTACK_EFFECTIVENESS_MATRIX: Record<AttackType, Record<ArmorType, number>> = {
  normal: {
    unarmored: 100,
    light: 90,
    medium: 120,
    heavy: 90,
    fortified: 80,
  },
  pierce: {
    unarmored: 100,
    light: 130,
    medium: 90,
    heavy: 80,
    fortified: 70,
  },
  siege: {
    unarmored: 100,
    light: 90,
    medium: 90,
    heavy: 90,
    fortified: 125,
  },
  magic: {
    unarmored: 100,
    light: 110,
    medium: 80,
    heavy: 120,
    fortified: 70,
  },
  chaos: {
    unarmored: 100,
    light: 100,
    medium: 100,
    heavy: 100,
    fortified: 100,
  },
};
