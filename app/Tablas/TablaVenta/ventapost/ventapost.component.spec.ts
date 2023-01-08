import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentapostComponent } from './ventapost.component';

describe('VentapostComponent', () => {
  let component: VentapostComponent;
  let fixture: ComponentFixture<VentapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentapostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
