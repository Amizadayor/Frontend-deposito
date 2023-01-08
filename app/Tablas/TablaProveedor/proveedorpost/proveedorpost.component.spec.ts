import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorpostComponent } from './proveedorpost.component';

describe('ProveedorpostComponent', () => {
  let component: ProveedorpostComponent;
  let fixture: ComponentFixture<ProveedorpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
