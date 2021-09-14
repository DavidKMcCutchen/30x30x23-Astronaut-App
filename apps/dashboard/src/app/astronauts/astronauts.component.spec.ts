import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautsComponent } from './astronauts.component';

describe('AstronautsComponent', () => {
  let component: AstronautsComponent;
  let fixture: ComponentFixture<AstronautsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronautsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
