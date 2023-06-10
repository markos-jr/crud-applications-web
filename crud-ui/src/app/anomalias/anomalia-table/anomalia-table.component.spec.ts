import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliaTableComponent } from './anomalia-table.component';

describe('AnomaliaTableComponent', () => {
  let component: AnomaliaTableComponent;
  let fixture: ComponentFixture<AnomaliaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnomaliaTableComponent]
    });
    fixture = TestBed.createComponent(AnomaliaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
