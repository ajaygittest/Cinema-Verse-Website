import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  

   private languageSubject = new BehaviorSubject<string>('All');
  private genreSubject = new BehaviorSubject<string>('All');

  language$ = this.languageSubject.asObservable();
  genre$ = this.genreSubject.asObservable();

  // Update language filter
  setLanguage(lang: string) {
    this.languageSubject.next(lang);
  }

  // Update genre filter
  setGenre(genre: string) {
    this.genreSubject.next(genre);
  }
}
