/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketEventsService } from './SocketEvents.service';

describe('Service: SocketEvents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketEventsService]
    });
  });

  it('should ...', inject([SocketEventsService], (service: SocketEventsService) => {
    expect(service).toBeTruthy();
  }));
});
