import { CommonModule } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StorageService } from '../../services/user-panel-service/storage-service';

@Component({
  selector: 'cine-main',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  items: any[] = [];


  isSideBarCollapse = input.required<boolean>();
  screenWdith = input.required<number>();
  sizeClass = computed(() => {
    const isSideBarCollapse = this.isSideBarCollapse();
    if (isSideBarCollapse) {
      return ''
    }
    return this.screenWdith() > 768 ? 'body-trimmed' : 'body-md-screen';
  })



  constructor(private store: StorageService, private route: Router) { }

  ngOnInit() {
    this.store.items$.subscribe(data => {
      this.items = data;
    });
    this.items = JSON.parse(sessionStorage.getItem('data')!);
    console.log(this.items);

    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const segments = event.url.split('/');
        const value = segments[segments.length - 1];
        console.log(value)
      }
    });
  }

}
