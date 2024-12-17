import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDeclineComponent } from './event-decline.component';

describe('EventDeclineComponent', () => {
  let component: EventDeclineComponent;
  let fixture: ComponentFixture<EventDeclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDeclineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
