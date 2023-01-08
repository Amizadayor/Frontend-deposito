import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaputComponent } from './ventaput.component';

describe('VentaputComponent', () => {
  let component: VentaputComponent;
  let fixture: ComponentFixture<VentaputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
