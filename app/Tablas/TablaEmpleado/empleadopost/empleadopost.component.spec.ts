import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadopostComponent } from './empleadopost.component';

describe('EmpleadopostComponent', () => {
  let component: EmpleadopostComponent;
  let fixture: ComponentFixture<EmpleadopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadopostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
