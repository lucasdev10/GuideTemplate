/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandlerErrosHttpService } from './handlerErrosHttp.service';

describe('Service: HandlerErrosHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandlerErrosHttpService]
    });
  });

  it('should ...', inject([HandlerErrosHttpService], (service: HandlerErrosHttpService) => {
    expect(service).toBeTruthy();
  }));
});
