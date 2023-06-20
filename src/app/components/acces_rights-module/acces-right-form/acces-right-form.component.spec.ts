import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesRightFormComponent } from './acces-right-form.component';

describe('AccesRightFormComponent', () => {
  let component: AccesRightFormComponent;
  let fixture: ComponentFixture<AccesRightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesRightFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesRightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
