import { BuilderType } from './builder.declarations';

export type ArmorType = 'unarmored' | 'light' | 'medium' | 'heavy' | 'fortified';
export type AttackType = 'normal' | 'pierce' | 'siege' | 'magic' | 'chaos';

export type AttackStrength = ArmorType & 'equal';
export type DefenseStrength = AttackType & 'all';

export type Movement = 'slow' | 'average' | 'fast' | 'very fast';

export interface Unit {
  abilities: string[];
  ability_description: string[];
  ability_type: string[];
  attack_effectiveness_order: ArmorType[];
  attack_speed: number;
  attack_speed_class: Movement;
  attack_strength: AttackStrength;
  attack_type: AttackType;
  attack_weakness: AttackStrength[];
  base_max_hit: number;
  base_min_hit: number;
  base_unit_name: string[] | null;
  builder: BuilderType;
  builder_id: string;
  can_buff: boolean;
  can_debuff: boolean;
  can_heal: boolean;
  can_splash: boolean;
  can_stun: boolean;
  can_summon: boolean;
  defense_effectiveness_order: AttackType[];
  defense_strength: DefenseStrength[];
  defense_type: ArmorType;
  defense_weakness: DefenseStrength[];
  food_cost: number;
  gold_cost: number;
  has_aura: boolean;
  hit_points: number;
  id: string;
  mana: number;
  max_upgrade_gold_cost: number;
  melee_or_ranged: 'melee' | 'ranged';
  name: string;
  range: number;
  total_food_cost_with_upgrade: number;
  unit_tier: number;
  upgradeable: boolean;
  upgraded_name: string[] | null; // ["tuskarr spearman"]
}
