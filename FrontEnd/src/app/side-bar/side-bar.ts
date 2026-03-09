import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { Main } from '../main/main';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter-service';

@Component({
  selector: 'cine-side-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar implements OnInit {
  ngOnInit(): void {
    this.closeSideNav();
  }
  @Output() typeSelected = new EventEmitter<string>();

@Input() isSideBarCollapse!: boolean;
  @Output() changeIsSideBarCollapse = new EventEmitter<boolean>();
 items = [
  { routeLink: '/list/tamil', icon: 'bi bi-motherboard', label: 'Tamil' },
  { routeLink: '/list/telugu', icon: 'bi bi-motherboard', label: 'Telugu' },
  { routeLink: '/list/malayalam', icon: 'bi bi-motherboard', label: 'Malayalam' }
];

constructor(private filterService: FilterService){
  
}
 select(type: string) {
    this.typeSelected.emit(type);
  }

    selectLanguage(language: string) {
    this.filterService.setLanguage(language); // update the shared service
  }

  toggleCollapse(): void {
    this.changeIsSideBarCollapse.emit(!this.isSideBarCollapse);
  }

  closeSideNav(): void {
    this.changeIsSideBarCollapse.emit(true);
  }
}
