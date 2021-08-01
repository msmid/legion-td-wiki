import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Unit } from '../../unit.interface';
import { DataServiceService } from 'src/app/units/data-service.service';

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

  constructor(private unitService: DataServiceService) {}

  ngOnInit() {
    this.findUpgrades();
  }

  findUpgrades() {
    if (!this.unit.upgradeable) {
      return;
    }

    this.unit.upgraded_name?.forEach(unit => {
      const upgrade = this.unitService.search({ key: unit, builders: [] });
      // Should always return array of one
      this.upgradeUnits.push(upgrade[0]);
    });
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
