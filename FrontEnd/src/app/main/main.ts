import { CommonModule } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { StorageService } from '../../services/user-panel-service/storage-service';
import { DialogService } from '../../services/dialog-service';
import { SideBar } from '../side-bar/side-bar';
import { FilterService } from '../../services/filter-service';

@Component({
  selector: 'cine-main',
  imports: [CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  items: any[] = [];
  isSideBarCollapsed = false;     
 filteredItems = [...this.items];
 
 selectedLanguage = 'All';
  selectedGenre = 'All';
  isSideBarCollapse = input.required<boolean>();
  screenWdith = input.required<number>();
  sizeClass = computed(() => {
    const isSideBarCollapse = this.isSideBarCollapse();
    if (isSideBarCollapse) {
      return ''
    }
    return this.screenWdith() > 768 ? 'body-trimmed' : 'body-md-screen';
  })



  constructor(private store: StorageService, private filterService: FilterService, private router: Router,private dialogBoxService: DialogService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.store.getItems().subscribe(res => {
    this.items = res;
     this.filteredItems = [...this.items];
  });

    this.filterService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.applyFilter();
    });

    // Subscribe to genre changes from header
    this.filterService.genre$.subscribe(genre => {
      this.selectedGenre = genre;
      this.applyFilter();
    });
}
 applyFilter() {
  if (!this.items || !this.items.length) return;

  this.filteredItems = this.items.filter(item => {
    const lang = (item.language || '').toLowerCase();
    const genre = (item.genre || '').toLowerCase();

    let languageMatches = true; 
    let genreMatches = true;

   
    if (this.selectedLanguage && this.selectedLanguage.toLowerCase() !== 'all') {
      languageMatches = lang === this.selectedLanguage.toLowerCase();
    }


    if (this.selectedGenre && this.selectedGenre.toLowerCase() !== 'all') {
      genreMatches = genre.includes(this.selectedGenre.toLowerCase());
    }


    return languageMatches && genreMatches;
  });
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


  proceedBooking(details:any){
    console.log(details)

    this.router.navigate(['/booking']);
    console.log(details)
  }

}
