import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getDataLocaleStorage = (key: string) => {
    const data = JSON.parse(localStorage.getItem(key)) || null;
    return data;
  };

  setDataLocaleStorage = (key: string, obj: any) => {
    const data = localStorage.setItem(key, JSON.stringify(obj));
    return data;
  };
}
