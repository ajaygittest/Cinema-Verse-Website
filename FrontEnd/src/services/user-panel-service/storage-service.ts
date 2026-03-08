import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoveDetails } from '../../app/models/move-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/cine/';

  movieDetails: any = {};

  item:any[]=[];

  addItem(item: any) {
    const current = this.itemsSubject.value;
    this.itemsSubject.next([...current, item]);
    console.log(this.itemsSubject.value[0]);
    this.movieDetails.title = this.itemsSubject.value[0].name;
    this.movieDetails.rating = this.itemsSubject.value[0].rating;
    this.movieDetails.synopsis = this.itemsSubject.value[0].synopsis;
    this.movieDetails.genre = this.itemsSubject.value[0].genre;
      const formData = new FormData();

  formData.append("title", this.itemsSubject.value[0].name);
  formData.append("genre", this.itemsSubject.value[0].genre);
  formData.append("rating", this.itemsSubject.value[0].rating);
  formData.append("synopsis", this.itemsSubject.value[0].synopsis);
  formData.append("imageFile", this.itemsSubject.value[0].imageFile);
    console.log(formData);
    this.http.post(this.url+"insert", formData).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

getItems() {
  return this.http.get<any[]>(this.url + "movies");
}
}
