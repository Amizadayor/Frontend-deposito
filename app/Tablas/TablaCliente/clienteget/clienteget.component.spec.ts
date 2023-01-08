import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientegetComponent } from './clienteget.component';

describe('ClientegetComponent', () => {
  let component: ClientegetComponent;
  let fixture: ComponentFixture<ClientegetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientegetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientegetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
