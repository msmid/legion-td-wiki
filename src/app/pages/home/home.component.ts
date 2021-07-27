import { Component, OnInit } from '@angular/core';
import { BUILDERS, BuilderType } from 'src/app/units/builder.declarations';
import { DataServiceService } from 'src/app/units/data-service.service';
import { Unit } from 'src/app/units/unit.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  units?: Unit[];

  searchKey = '';
  selectedBuilders: BuilderType[] = [];
  builders = BUILDERS;

  constructor(private unitService: DataServiceService) {}

  ngOnInit(): void {
    this.units = this.unitService.units;
  }

  handleSearch() {
    if (this.searchKey.length === 0 && this.selectedBuilders.length === 0) {
      this.unitService.reset();
      this.units = this.unitService.units;
    }

    this.units = this.unitService.search({ key: this.searchKey, builders: this.selectedBuilders });
  }
}
