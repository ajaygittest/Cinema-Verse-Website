import { Component, EventEmitter, input, OnInit, Output, output } from '@angular/core';
import { Main } from '../main/main';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  select(type: string) {
    this.typeSelected.emit(type);
  }

  isSideBarCollapse = input.required<boolean>();
  changeIsSideBarCollapse = output<boolean>();
  items = [

    {
      routeLink: 'tamil',
      icon: 'bi bi-motherboard',
      label: 'Tamil',
    },
    {
      routeLink: 'telugu',
      icon: 'bi bi-motherboard',
      label: 'Telugu',
    }, {
      routeLink: 'malayalam',
      icon: 'bi bi-motherboard',
      label: 'Malayalam',
    }
  ];

  toggleCollapse(): void {
    this.changeIsSideBarCollapse.emit(!this.isSideBarCollapse());
  }

  closeSideNav(): void {
    this.changeIsSideBarCollapse.emit(true);
  }
}
