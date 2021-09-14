import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDetailsComponent } from './astronaut-details.component';

describe('AstronautDetailsComponent', () => {
  let component: AstronautDetailsComponent;
  let fixture: ComponentFixture<AstronautDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronautDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
