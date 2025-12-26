import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { Main } from './main/main';
import { HeaderBar } from './header-bar/header-bar';
import { UserPanel } from './user-panel/user-panel';
import { UserPanelService } from '../services/user-panel-service/user-panel-service';
import { DialogBox } from './dialog-box/dialog-box/dialog-box';
import { DialogService } from '../services/dialog-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SideBar, UserPanel, Main, HeaderBar, DialogBox, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  showDialog = false;
  message = '';
  private resolveFn!: (value: boolean) => void;

  constructor(private panelService: UserPanelService, private dialogService: DialogService) {
    this.dialogService.dialogState$.subscribe((data) => {
      this.message = data.message;
      this.resolveFn = data.callback;
      this.showDialog = true;
    });
  }

  isPanelOpen: boolean = false;
  protected readonly title = signal('cinema-verse');

  isSideBarCollapse = signal<boolean>(false);
  screenWdith = signal<number>(window.innerWidth);

  handleDialog(result: boolean) {
    this.showDialog = false;
    this.resolveFn(result);
  }

  ngOnInit(): void {
    this.panelService.panelOpen$.subscribe((isOpen) => {
      this.isPanelOpen = isOpen;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWdith.set(window.innerWidth);
    if (this.screenWdith() < 768) {
      this.isSideBarCollapse.set(true);
    }
  }

  changeIsSideBarCollapse(isSidebarStatus: boolean): void {
    this.isSideBarCollapse.set(isSidebarStatus);
  }
}
