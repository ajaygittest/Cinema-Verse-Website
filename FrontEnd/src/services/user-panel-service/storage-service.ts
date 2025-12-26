import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  addItem(item: any) {
    const current = this.itemsSubject.value;
    console.log(sessionStorage.setItem('data', JSON.stringify([...current, item])));

    this.itemsSubject.next([...current, item]);
  }

  getItems() {
    return this.itemsSubject.value;
  }
}
