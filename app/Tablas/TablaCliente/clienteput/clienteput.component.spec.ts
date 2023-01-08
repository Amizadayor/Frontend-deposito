import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteputComponent } from './clienteput.component';

describe('ClienteputComponent', () => {
  let component: ClienteputComponent;
  let fixture: ComponentFixture<ClienteputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
