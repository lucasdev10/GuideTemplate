import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import io from 'socket.io-client';

const socket = io.connect('UrlServer', {
  reconnection: true,
  reconnectionDelay: 500,
  maxReconnectionAttempts: Infinity,
  secure: true,
  rejectUnauthorized: false,
  path: '/chat/socket.io',
  query: { userId: 'UserId' },
});

@Injectable({
  providedIn: 'root',
})
export class SocketEventsService {
  constructor() {}

  handlerEventsSocket = (): Observable<any> => {
    return new Observable((observer) => {
      socket.on('connect', (event) => {
        observer.next({ event: event, param: 'connect' });
      });

      socket.on('disconnect', (event) => {
        observer.next({ event: event, param: 'disconnect' });
      });

      socket.on('typing', (event) => {
        observer.next({ event: event, param: 'typing' });
      });

      socket.on('newIncomingContact', (event) => {
        observer.next({ event: event, param: 'newIncomingContact' });
      });

      socket.on('messageToUser', (event) => {
        observer.next({ event: event, param: 'newIncomingContact' });
      });

      socket.on('messageDeliveredToWhatsApp', (event) => {
        observer.next({ event: event, param: 'messageDeliveredToWhatsApp' });
      });

      socket.on('updateProfilePicture', (event, url) => {
        observer.next({ event: event, param: 'updateProfilePicture' });
      });

      socket.on('offline', (event) => {
        observer.next({ event: event, param: 'offline' });
      });

      socket.on('confirmNewContact', (event) => {
        observer.next({ event: event, param: 'confirmNewContact' });
      });

      socket.on('contactNotFound', (event) => {
        observer.next({ event: event, param: 'contactNotFound' });
      });

      socket.on('removeContact', (event) => {
        observer.next({ event: event, param: 'removeContact' });
      });
    });
  };
}
