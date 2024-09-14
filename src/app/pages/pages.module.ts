import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnitsModule } from '../units/units.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, PagesRoutingModule, UnitsModule],
})
export class PagesModule {}
