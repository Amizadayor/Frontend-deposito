import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadogetComponent } from './empleadoget.component';

describe('EmpleadogetComponent', () => {
  let component: EmpleadogetComponent;
  let fixture: ComponentFixture<EmpleadogetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadogetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadogetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
