import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private _sessionService: SessionService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const sessionData = this._sessionService.getDataSessionStorage('session');

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionData?.accessToken}`,
      },
    });

    return next.handle(request).pipe(
      tap(
        (success: any) => {
          console.log('success', success);
        },
        (error: any) => {
          console.log('error', error);
          this._sessionService.clearSession();
        }
      )
    );
  }
}
