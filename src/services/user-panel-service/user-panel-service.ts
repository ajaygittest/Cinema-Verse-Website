import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPanelService {


  private panelOpenSource = new Subject<boolean>();
  panelOpen$ = this.panelOpenSource.asObservable();

  openPanel() {
    this.panelOpenSource.next(true);
  }

  closePanel() {
    this.panelOpenSource.next(false);
  }
}
