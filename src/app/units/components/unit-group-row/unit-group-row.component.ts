import { Component, inject, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Unit } from '../../unit.interface';

@Component({
  selector: 'app-unit-group-row',
  templateUrl: './unit-group-row.component.html',
  styleUrls: ['./unit-group-row.component.scss'],
})
export class UnitGroupRowComponent implements OnInit {
  @Input({ required: true }) group!: Unit[];

  dataService = inject(DataService);

  unitGroup: Unit[] = [];

  ngOnInit() {
    this.unitGroup = this.group;
  }
}
