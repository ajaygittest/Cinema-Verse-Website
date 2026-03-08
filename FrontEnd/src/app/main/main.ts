import { CommonModule } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StorageService } from '../../services/user-panel-service/storage-service';
import { DialogService } from '../../services/dialog-service';
import { SideBar } from '../side-bar/side-bar';

@Component({
  selector: 'cine-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  items: any[] = [];
  isSideBarCollapsed = false;     
 filteredItems = [...this.items];

  isSideBarCollapse = input.required<boolean>();
  screenWdith = input.required<number>();
  sizeClass = computed(() => {
    const isSideBarCollapse = this.isSideBarCollapse();
    if (isSideBarCollapse) {
      return ''
    }
    return this.screenWdith() > 768 ? 'body-trimmed' : 'body-md-screen';
  })



  constructor(private store: StorageService, private router: Router,private dialogBoxService: DialogService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Loading")
   this.store.getItems().subscribe(res => {
    this.items = res;
     this.filteredItems = [...this.items];
  });

    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const urlSegments = event.urlAfterRedirects.split('/');
      const language = urlSegments[urlSegments.length - 1] || 'All';
      this.filterByLanguage(language);
    }
  });

  //   this.route.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       const segments = event.url.split('/');
  //       const value = segments[segments.length - 1];
  //     }
  //   });
  //     console.log(this.items)
  // }
}

   filterByLanguage(language: string) {
    if (!language || language === 'All') {
      this.filteredItems = [...this.items];
    } else {
      const langLower = language.toLowerCase(); 
      this.filteredItems = this.items.filter(item => item.language.toLowerCase() === langLower);
    }
  }

    openDialog() {
    this.dialogBoxService.open('Are you sure you want to proceed?').then((result) => {
      if (result) {
        console.log('Confirmed');
      } else {
        console.log('Cancelled');
      }
    });
  }

}
