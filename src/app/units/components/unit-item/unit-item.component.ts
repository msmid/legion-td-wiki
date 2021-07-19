import { Component, Input, OnInit } from '@angular/core';
import { Unit } from '../../unit.interface';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html',
  styleUrls: ['./unit-item.component.scss'],
})
export class UnitItemComponent implements OnInit {
  @Input() unit!: Unit;

  gridStyle = {
    width: '100%',
    textAlign: 'left',
  };

  constructor() {}

  ngOnInit(): void {}
}
