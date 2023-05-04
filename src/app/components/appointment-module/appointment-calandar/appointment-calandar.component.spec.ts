import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCalandarComponent } from './appointment-calandar.component';

describe('AppointmentCalandarComponent', () => {
  let component: AppointmentCalandarComponent;
  let fixture: ComponentFixture<AppointmentCalandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCalandarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCalandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
