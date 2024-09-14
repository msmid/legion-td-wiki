import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnitDetailModalComponent } from './components/unit-detail-modal/unit-detail-modal.component';
import { UnitItemComponent } from './components/unit-item/unit-item.component';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [UnitItemComponent, UnitDetailModalComponent],
  imports: [
    CommonModule,
  ],
  providers: [DataServiceService],
  exports: [UnitItemComponent],
})
export class UnitsModule {}
