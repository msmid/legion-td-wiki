import { ComponentFixture, TestBed } from '@angular/core/testing';

import { unitFixture } from 'src/test/fixtures/unit.fixture';
import { UnitsModule } from '../../units.module';
import { UnitItemComponent } from './unit-item.component';

describe('UnitItemComponent', () => {
  let component: UnitItemComponent;
  let fixture: ComponentFixture<UnitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitItemComponent],
      imports: [UnitsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitItemComponent);
    component = fixture.componentInstance;
    component.unit = unitFixture;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
