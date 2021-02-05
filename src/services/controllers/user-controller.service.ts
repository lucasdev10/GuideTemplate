import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { HandlerErrosHttpService } from '../api/handlerErrosHttp.service';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService {
  constructor(
    private _apiService: ApiService,
    private _handlerHttp: HandlerErrosHttpService
  ) {
    this._apiService.endPoint = '';
  }

  handlerController = (event: string, data: any = null) => {
    return new Observable((observer) => {
      if (event === 'getById') {
        this._apiService.getById(data).subscribe((res) => {
          return observer.next(res);
        });
      }

      if (event === 'getAll') {
        this._apiService.getAll().subscribe((res) => {
          return observer.next(res);
        });
      }

      if (event === 'post') {
        this._apiService.post(data).subscribe(
          (success) => {
            return; // success
          },
          (error) => {
            return this._handlerHttp.handlerError(error);
          }
        );
      }

      if (event === 'update') {
        this._apiService.update(data).subscribe(
          (success) => {
            return; // success
          },
          (error) => {
            return this._handlerHttp.handlerError(error);
          }
        );
      }

      if (event === 'delete') {
        this._apiService.delete(data).subscribe(
          (success) => {
            return; // success
          },
          (error) => {
            return this._handlerHttp.handlerError(error);
          }
        );
      }
    });
  };
}
