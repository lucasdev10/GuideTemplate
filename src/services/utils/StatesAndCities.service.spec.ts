/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatesAndCitiesService } from './StatesAndCities.service';

describe('Service: StatesAndCities', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatesAndCitiesService]
    });
  });

  it('should ...', inject([StatesAndCitiesService], (service: StatesAndCitiesService) => {
    expect(service).toBeTruthy();
  }));
});
