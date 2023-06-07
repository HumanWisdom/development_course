import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoengageService {

  constructor() { }

  
  requestWebPushPermission(): Promise<NotificationPermission> {
    return new Promise((resolve) => {
      if ('Notification' in window && navigator.serviceWorker) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            navigator.serviceWorker.ready.then((registration) => {
              registration.pushManager
                .subscribe({ userVisibleOnly: true })
                .then((subscription) => {
                  // Send the subscription details to your server for storing and later use
                  console.log(subscription);
                })
                .catch((error) => {
                  console.error('Failed to subscribe user to push notifications:', error);
                });
            });
          }
          resolve(permission);
        });
      } else {
        resolve('denied');
      }
    });
  }
}
