import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogState = new Subject<{
    message: string;
    callback: (result: boolean) => void;
  }>();

  dialogState$ = this.dialogState.asObservable();

  open(message: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.dialogState.next({
        message,
        callback: resolve,
      });
    });
  }
}
