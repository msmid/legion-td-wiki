import { Component, OnInit } from '@angular/core';
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

  constructor(private unitService: DataServiceService) {}

  ngOnInit(): void {
    console.log('init');

    this.units = this.unitService.units;
  }

  handleSearch() {
    console.log(this.searchKey);

    if (this.searchKey.length === 0) {
      this.unitService.reset();
      this.units = this.unitService.units;
    }

    this.units = this.unitService.search(this.searchKey);
  }
}
