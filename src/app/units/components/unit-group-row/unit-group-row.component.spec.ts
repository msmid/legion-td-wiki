import { ComponentFixture, TestBed } from '@angular/core/testing';

import { groupFixture2 } from 'src/test/fixtures/unit.fixture';
import { UnitsModule } from '../../units.module';
import { UnitGroupRowComponent } from './unit-group-row.component';

describe('UnitGroupRowComponent', () => {
  let component: UnitGroupRowComponent;
  let fixture: ComponentFixture<UnitGroupRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitGroupRowComponent],
      imports: [UnitsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitGroupRowComponent);
    component = fixture.componentInstance;
    component.group = groupFixture2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
