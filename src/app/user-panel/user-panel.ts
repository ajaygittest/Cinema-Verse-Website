import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserPanelService } from '../../services/user-panel-service/user-panel-service';

@Component({
  selector: 'cine-user-panel',
  imports: [CommonModule,RouterModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.scss',
})
export class UserPanel {
  panelOpen = false;
  panelTitle = '';
constructor(private panelService:UserPanelService){}




  closePanel() {
    this.panelService.closePanel();
  }
}
