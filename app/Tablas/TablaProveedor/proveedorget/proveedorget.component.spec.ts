import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorgetComponent } from './proveedorget.component';

describe('ProveedorgetComponent', () => {
  let component: ProveedorgetComponent;
  let fixture: ComponentFixture<ProveedorgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
