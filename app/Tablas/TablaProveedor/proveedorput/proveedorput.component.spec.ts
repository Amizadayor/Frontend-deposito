import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorputComponent } from './proveedorput.component';

describe('ProveedorputComponent', () => {
  let component: ProveedorputComponent;
  let fixture: ComponentFixture<ProveedorputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
