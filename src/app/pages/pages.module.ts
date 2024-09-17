import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageSearchComponent } from '../shared/components/page-search.component';
import { UnitsModule } from '../units/units.module';
import { HomePage } from './home/home.page';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, FormsModule, PagesRoutingModule, UnitsModule, PageSearchComponent],
})
export class PagesModule {}
