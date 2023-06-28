import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliaFormComponent } from './anomalia-form.component';

describe('AnomaliaFormComponent', () => {
  let component: AnomaliaFormComponent;
  let fixture: ComponentFixture<AnomaliaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnomaliaFormComponent]
    });
    fixture = TestBed.createComponent(AnomaliaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
