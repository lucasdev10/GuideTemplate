import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsFunctionsService {
  constructor() {}

  transformBase64ToBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  uploadSendToServer = (file, uploadId, type) => {
    return new Observable((observer) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('uploadId', uploadId);
      formData.append('type', type);
    });
  };

  generateRamdomId = () => {
    let d = new Date().getTime();
    if (
      typeof performance !== 'undefined' &&
      typeof performance.now === 'function'
    ) {
      d += performance.now();
    }
    return (
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }) + Math.random()
    );
  };

  organizeArrayByParam = (array) => {
    array.sort((objA, objB) => {
      let keyA = ''; // Condition
      let keyB = ''; // Condition

      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
    return array;
  };
}
