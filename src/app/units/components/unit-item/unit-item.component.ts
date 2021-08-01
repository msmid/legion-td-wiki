import { Component, Input, OnInit } from '@angular/core';
import { ATTACK_EFFECTIVENESS_MATRIX } from '../../constants';
import { Unit } from '../../unit.interface';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html',
  styleUrls: ['./unit-item.component.scss'],
})
export class UnitItemComponent implements OnInit {
  @Input() unit!: Unit;
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
}
