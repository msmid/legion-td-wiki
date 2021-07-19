import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from './data-service.service';
import { UnitItemComponent } from './components/unit-item/unit-item.component';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';

import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [UnitItemComponent],
  imports: [CommonModule, NzCardModule, NzDescriptionsModule, NzIconModule.forRoot(icons)],
  providers: [DataServiceService],
  exports: [UnitItemComponent],
})
export class UnitsModule {}
