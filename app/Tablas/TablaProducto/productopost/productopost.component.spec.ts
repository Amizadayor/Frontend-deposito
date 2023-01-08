import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductopostComponent } from './productopost.component';

describe('ProductopostComponent', () => {
  let component: ProductopostComponent;
  let fixture: ComponentFixture<ProductopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductopostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
