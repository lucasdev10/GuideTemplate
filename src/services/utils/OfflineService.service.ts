import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OfflineServiceService {
  constructor() {}

  saveDataOfflineInStorage = (data: any, ID: string) => {
    const storage = JSON.parse(localStorage.getItem(`${ID}`));
    if (storage) {
      // Get data from local storage
      // Modify the object
      // Save the object again
    } else {
      // Create a new object
    }
  };

  checkStoredDataToSend = (ID: string) => {
    const storage = JSON.parse(localStorage.getItem(`${ID}`));
    if (storage) {
      storage.map((item) => {
        // Handler function
      });
      localStorage.removeItem(`${ID}`);
    }
  };

  checkData = (ID: string) => {
    // Check to see if they have anything saved offline
    const storage = JSON.parse(localStorage.getItem(`${ID}`));
    storage ? storage : null;
  };
}
