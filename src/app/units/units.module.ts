import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from './data-service.service';
import { UnitItemComponent } from './components/unit-item/unit-item.component';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';

// TODO refactor to use its own module because it is duplicate it in app.module
import * as AllIcons from '@ant-design/icons-angular/icons';
import { UnitDetailModalComponent } from './components/unit-detail-modal/unit-detail-modal.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [UnitItemComponent, UnitDetailModalComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzTagModule,
    NzDescriptionsModule,
    NzIconModule.forRoot(icons),
    NzToolTipModule,
    NzModalModule,
    NzGridModule,
  ],
  providers: [DataServiceService],
  exports: [UnitItemComponent],
})
export class UnitsModule {}
