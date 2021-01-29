import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BroadCastingService {
  observer: BehaviorSubject<any> = new BehaviorSubject<any>({});

  listenObserver = (): Observable<any> => {
    return this.observer.asObservable();
  };

  constructor() {}

  handlerBroadCasting = (param: string, body: any) => {
    if (param === param) {
      return this.observer.next({ body: body });
    }
  };
}
