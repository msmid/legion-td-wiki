import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightTextPipe } from '../shared/pipes/highlight-text.pipe';
import { UnitDetailModalComponent } from './components/unit-detail-modal/unit-detail-modal.component';
import { UnitGroupRowComponent } from './components/unit-group-row/unit-group-row.component';
import { UnitItemComponent } from './components/unit-item/unit-item.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [UnitItemComponent, UnitGroupRowComponent, UnitDetailModalComponent],
  imports: [CommonModule, HighlightTextPipe],
  providers: [DataService],
  exports: [UnitItemComponent, UnitGroupRowComponent, UnitDetailModalComponent],
})
export class UnitsModule {}
