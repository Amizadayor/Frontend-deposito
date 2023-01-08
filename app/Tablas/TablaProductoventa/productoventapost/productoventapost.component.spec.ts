import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoventapostComponent } from './productoventapost.component';

describe('ProductoventapostComponent', () => {
  let component: ProductoventapostComponent;
  let fixture: ComponentFixture<ProductoventapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoventapostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoventapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
