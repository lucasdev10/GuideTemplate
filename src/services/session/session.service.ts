import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessionUserData: any;

  constructor(
    private _router: Router,
    private _storageService: StorageService
  ) {
    this.sessionUserData = this._storageService.getDataLocaleStorage('session');
  }

  goLogin = () => {
    this._router.navigate(['/login']);
  };

  goHome = () => {
    this._router.navigate(['/home']);
  };

  clearSession = () => {
    this.goLogin();
    localStorage.clear();
  };

  isValidSession = async () => {
    const isValid = (await this.sessionUserData) ? true : false;
    !isValid ? this.clearSession() : '';
    return isValid;
  };
}
