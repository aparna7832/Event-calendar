import { TestBed } from '@angular/core/testing';

import { EventCalendarService } from './calendar.service';

describe('EventCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCalendarService = TestBed.get(EventCalendarService);
    expect(service).toBeTruthy();
  });
});
