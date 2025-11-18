import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cine-main',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

  isSideBarCollapse=input.required<boolean>();
  screenWdith=input.required<number>();
  sizeClass=computed(()=>{
    const isSideBarCollapse=this.isSideBarCollapse();
    if(isSideBarCollapse){
      return ''
    }
    return this.screenWdith() > 768?'body-trimmed':'body-md-screen';
  })

}
