import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentagetComponent } from './ventaget.component';

describe('VentagetComponent', () => {
  let component: VentagetComponent;
  let fixture: ComponentFixture<VentagetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentagetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentagetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
