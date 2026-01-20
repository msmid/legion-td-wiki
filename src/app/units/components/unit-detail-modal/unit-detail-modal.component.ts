import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/units/data.service';
import { Unit } from '../../unit.interface';

@Component({
  selector: 'app-unit-detail-modal',
  templateUrl: './unit-detail-modal.component.html',
  styleUrls: ['./unit-detail-modal.component.scss'],
})
export class UnitDetailModalComponent implements OnInit {
  @Input() unit!: Unit;
  @Input() isVisible = false;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();

  upgradeUnits: Unit[] = [];

  constructor(private unitService: DataService) {}

  ngOnInit() {
    this.findUpgrades();
  }

  findUpgrades() {
    const upgrades = this.unitService.getCollection(this.unit);
    this.upgradeUnits.push(...upgrades);
  }

  handleCancel() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  handleOk() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }
}
