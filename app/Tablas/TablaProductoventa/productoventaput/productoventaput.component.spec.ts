import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoventaputComponent } from './productoventaput.component';

describe('ProductoventaputComponent', () => {
  let component: ProductoventaputComponent;
  let fixture: ComponentFixture<ProductoventaputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoventaputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoventaputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
