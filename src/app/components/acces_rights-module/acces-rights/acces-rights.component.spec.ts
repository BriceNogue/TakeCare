import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesRightsComponent } from './acces-rights.component';

describe('AccesRightsComponent', () => {
  let component: AccesRightsComponent;
  let fixture: ComponentFixture<AccesRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesRightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
