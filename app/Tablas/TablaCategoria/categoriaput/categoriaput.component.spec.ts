import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaputComponent } from './categoriaput.component';

describe('CategoriaputComponent', () => {
  let component: CategoriaputComponent;
  let fixture: ComponentFixture<CategoriaputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
