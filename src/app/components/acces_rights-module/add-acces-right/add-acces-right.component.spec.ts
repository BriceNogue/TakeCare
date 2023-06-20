import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccesRightComponent } from './add-acces-right.component';

describe('AddAccesRightComponent', () => {
  let component: AddAccesRightComponent;
  let fixture: ComponentFixture<AddAccesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccesRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAccesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
