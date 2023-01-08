import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientepostComponent } from './clientepost.component';

describe('ClientepostComponent', () => {
  let component: ClientepostComponent;
  let fixture: ComponentFixture<ClientepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
