import { Component, input, output } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserPanelService } from '../../services/user-panel-service/user-panel-service';

@Component({
  selector: 'cine-header-bar',
  imports: [],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.scss',
})
export class HeaderBar {

  constructor(private router: Router, private panelService:UserPanelService) {}
 
showPanel(){
 this.panelService.openPanel();
}

}
