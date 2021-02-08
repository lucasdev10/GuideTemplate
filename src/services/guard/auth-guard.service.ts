import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _sessionService: SessionService) {}

  canActivate = () => {
    return this._sessionService.isValidSession();
  };
}
