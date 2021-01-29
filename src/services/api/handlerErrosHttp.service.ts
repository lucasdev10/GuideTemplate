import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandlerErrosHttpService {
  constructor() {}

  handlerError = (error: any) => {
    if (error.status === 500) {
      console.log('Internal server error.');
      return EMPTY;
    }

    if (error.status === 429) {
      console.log('Internal server error.');
      return EMPTY;
    }

    if (error.status === 401) {
      console.log('Incorrect information or invalid session.');
      return EMPTY;
    }

    if (error.status === 400) {
      console.log('Internal server error.');
      return EMPTY;
    }

    if (error.status === 0) {
      console.log(
        'The system has lost communication <br> with the server. <br> Try again in a few seconds.'
      );
      return EMPTY;
    }
  };
}
