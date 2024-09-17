import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/units/data.service';
import { Unit } from 'src/app/units/unit.interface';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  groups: Unit[][] = [];

  searchKey = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.groups = this.dataService.groups;
  }

  handleSearch() {
    if (this.searchKey.length === 0) {
      this.groups = this.dataService.groups;
    }

    this.groups = this.dataService.searchInGroup(this.searchKey);
  }
}
