import { Component, input, output } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserPanelService } from '../../services/user-panel-service/user-panel-service';
import { FilterService } from '../../services/filter-service';

@Component({
  selector: 'cine-header-bar',
  imports: [],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.scss',
})
export class HeaderBar {
  genres = ['Thriller', 'Romantic', 'Horror', 'Comedy'];
  constructor(private router: Router,private filterService: FilterService, private panelService: UserPanelService) { }

  showPanel() {
    this.panelService.openPanel();
  }

    

  selectGenre(genre: string) {
    this.filterService.setGenre(genre); 
  }

}
