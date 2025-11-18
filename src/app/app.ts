import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


  protected readonly title = signal('cinema-verse');

  isSideBarCollapse=signal<boolean>(false);
  screenWdith=signal<number>(window.innerWidth);

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
