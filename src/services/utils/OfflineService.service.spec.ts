/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OfflineServiceService } from './OfflineService.service';

describe('Service: OfflineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfflineServiceService]
    });
  });

  it('should ...', inject([OfflineServiceService], (service: OfflineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
