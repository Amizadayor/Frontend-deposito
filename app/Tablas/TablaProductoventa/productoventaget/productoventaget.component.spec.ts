import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoventagetComponent } from './productoventaget.component';

describe('ProductoventagetComponent', () => {
  let component: ProductoventagetComponent;
  let fixture: ComponentFixture<ProductoventagetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoventagetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoventagetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
