import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriamostrarComponent } from './categoriamostrar.component';

describe('CategoriamostrarComponent', () => {
  let component: CategoriamostrarComponent;
  let fixture: ComponentFixture<CategoriamostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriamostrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriamostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
