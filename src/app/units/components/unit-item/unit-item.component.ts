import { Component, Input, OnInit } from '@angular/core';
import { ATTACK_EFFECTIVENESS_MATRIX } from '../../constants';
import { Unit } from '../../unit.interface';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html',
  styleUrls: ['./unit-item.component.scss'],
})
export class UnitItemComponent implements OnInit {
  @Input({ required: true }) unit!: Unit;
  @Input() index?: number;
  @Input() withModal = true;

  attackMatrix = ATTACK_EFFECTIVENESS_MATRIX;

  gridStyle = {
    width: '100%',
    textAlign: 'left',
  };

  showModal = false;

  constructor() {}

  ngOnInit() {}

  showDetailModal() {
    this.showModal = !this.showModal;
  }

  getAttackEffectivenessTip(unit: Unit): string {
    if (unit.attack_type === 'chaos') {
      return '100%';
    }
    return unit.attack_effectiveness_order
      .map(armor => `${armor} ${this.attackMatrix[unit.attack_type][armor]}%`)
      .join(' | ');
  }

  getDefenseEffectivenessTip(unit: Unit): string {
    if (unit.defense_type === 'unarmored') {
      return '100%';
    }

    return unit.defense_effectiveness_order
      .map(attack => `${attack} ${this.attackMatrix[attack]?.[unit.defense_type]}%`)
      .join(' | ');
  }
}
