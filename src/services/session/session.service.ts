import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessionUserData: any;

  constructor(private _router: Router) {
    this.sessionUserData = this.getDataSessionStorage('session');
  }

  getDataSessionStorage = (key: string) => {
    const data = JSON.parse(sessionStorage.getItem(key)) || null;
    return data;
  };

  setDataSessionStorage = (key: string, obj: any) => {
    const data = sessionStorage.setItem(key, JSON.stringify(obj));
    return data;
  };

  goLogin = () => {
    this._router.navigate(['/login']);
  };

  goHome = () => {
    this._router.navigate(['/home']);
  };

  clearSession = () => {
    this.goLogin();
    sessionStorage.clear();
    localStorage.clear();
  };

  isValidSession = async () => {
    const isValid = (await this.sessionUserData) ? true : false;
    !isValid ? this.clearSession() : '';
    return isValid;
  };
}
