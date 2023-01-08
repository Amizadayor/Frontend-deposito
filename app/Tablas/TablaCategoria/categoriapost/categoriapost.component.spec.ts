import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriapostComponent } from './categoriapost.component';

describe('CategoriapostComponent', () => {
  let component: CategoriapostComponent;
  let fixture: ComponentFixture<CategoriapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriapostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
