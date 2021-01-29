/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BroadCastingService } from './BroadCasting.service';

describe('Service: BroadCasting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadCastingService]
    });
  });

  it('should ...', inject([BroadCastingService], (service: BroadCastingService) => {
    expect(service).toBeTruthy();
  }));
});
