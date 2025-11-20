import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { Main } from './main/main';
import { HeaderBar } from './header-bar/header-bar';
import { UserPanel } from './user-panel/user-panel';
import { UserPanelService } from '../services/user-panel-service/user-panel-service';

@Component({
  selector: 'app-root',
  imports: [ SideBar, UserPanel,Main,HeaderBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private panelService:UserPanelService){}
  
  isPanelOpen:boolean=false;
  protected readonly title = signal('cinema-verse');

  isSideBarCollapse=signal<boolean>(false);
  screenWdith=signal<number>(window.innerWidth);

  ngOnInit(): void {
    this.panelService.panelOpen$.subscribe(isOpen=>{
      this.isPanelOpen=isOpen;
    })
  }

  @HostListener('window:resize')
    onResize(){

    this.screenWdith.set(window.innerWidth);
    if(this.screenWdith()<768){
      this.isSideBarCollapse.set(true);
    }
  }

  changeIsSideBarCollapse(isSidebarStatus:boolean):void{
    this.isSideBarCollapse.set(isSidebarStatus)
  }
}
