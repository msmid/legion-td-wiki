import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDetailModalComponent } from './unit-detail-modal.component';

describe('UnitDetailModalComponent', () => {
  let component: UnitDetailModalComponent;
  let fixture: ComponentFixture<UnitDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
