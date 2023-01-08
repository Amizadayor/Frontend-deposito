import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductogetComponent } from './productoget.component';

describe('ProductogetComponent', () => {
  let component: ProductogetComponent;
  let fixture: ComponentFixture<ProductogetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductogetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductogetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
