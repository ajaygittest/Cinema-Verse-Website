import { Component, input, output } from '@angular/core';
import { Main } from '../main/main';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cine-side-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  isSideBarCollapse = input.required<boolean>();
  changeIsSideBarCollapse = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'bi bi-motherboard',
      label: 'Dashboard',
    },
  ];

  toggleCollapse(): void {
    this.changeIsSideBarCollapse.emit(!this.isSideBarCollapse());
  }

  closeSideNav(): void {
    this.changeIsSideBarCollapse.emit(true);
  }
}
