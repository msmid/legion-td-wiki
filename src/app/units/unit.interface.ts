export type ArmorType = 'unarmored' | 'light' | 'medium' | 'heavy' | 'fortified';

export type Movement = 'fast';

export type AttackStength = 'medium';
export type AttackType = 'normal' | 'pierce' | 'siege' | 'magic' | 'chaos';
export type Builder = 'artic';

export interface Unit {
  abilities: string[];
  ability_description: string;
  ability_type: string;
  attack_effectiveness_order: ArmorType[];
  attack_speed: number;
  attack_speed_class: Movement;
  attack_strength: AttackStength;
  attack_type: AttackType;
  attack_weakness: ArmorType[]; // ["fortified"]
  base_max_hit: number;
  base_min_hit: number;
  base_unit_name: string | null;
  builder: Builder; // "artic"
  builder_id: string; // "NEn20Rc"
  can_buff: boolean;
  can_debuff: boolean;
  can_heal: boolean;
  can_splash: boolean;
  can_stun: boolean;
  can_summon: boolean;
  defense_effectiveness_order: AttackType[]; //["magic", "pierce", "siege", "chaos", "normal"]
  defense_strength: AttackType[]; //["magic"]
  defense_type: ArmorType; // "medium"
  defense_weakness: AttackType[]; // ["normal"]
  food_cost: number;
  gold_cost: number;
  has_aura: boolean;
  hit_points: number;
  id: string; // "HlwkOll"
  mana: number;
  max_upgrade_gold_cost: number;
  melee_or_ranged: 'melee' | 'ranged';
  name: string;
  range: number;
  total_food_cost_with_upgrade: number;
  unit_tier: number;
  upgradeable: boolean;
  upgraded_name: string[]; // ["tuskarr spearman"]
}
