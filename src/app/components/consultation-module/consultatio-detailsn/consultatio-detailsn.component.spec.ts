import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultatioDetailsnComponent } from './consultatio-detailsn.component';

describe('ConsultatioDetailsnComponent', () => {
  let component: ConsultatioDetailsnComponent;
  let fixture: ComponentFixture<ConsultatioDetailsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultatioDetailsnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultatioDetailsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
