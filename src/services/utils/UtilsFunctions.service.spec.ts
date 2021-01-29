/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilsFunctionsService } from './UtilsFunctions.service';

describe('Service: UtilsFunctions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsFunctionsService]
    });
  });

  it('should ...', inject([UtilsFunctionsService], (service: UtilsFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
