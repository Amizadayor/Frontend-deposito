import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoputComponent } from './empleadoput.component';

describe('EmpleadoputComponent', () => {
  let component: EmpleadoputComponent;
  let fixture: ComponentFixture<EmpleadoputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
