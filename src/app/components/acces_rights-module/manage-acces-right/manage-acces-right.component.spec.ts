import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccesRightComponent } from './manage-acces-right.component';

describe('ManageAccesRightComponent', () => {
  let component: ManageAccesRightComponent;
  let fixture: ComponentFixture<ManageAccesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAccesRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAccesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
