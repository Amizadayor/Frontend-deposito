import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoputComponent } from './productoput.component';

describe('ProductoputComponent', () => {
  let component: ProductoputComponent;
  let fixture: ComponentFixture<ProductoputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
