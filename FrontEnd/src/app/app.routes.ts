import { Routes } from '@angular/router';
import { UserPanel } from './user-panel/user-panel';
import { Main } from './main/main';
import { SeatSelectionComponent } from './seat-selection-component/seat-selection-component';

export const routes: Routes = [

    {
        path: 'list/:language', component: Main

    },
     { path: '', redirectTo: '/list/All', pathMatch: 'full' },
       { path: '**', redirectTo: '/list/All' } ,
    {
        path: 'user-panel', component: UserPanel
    },
    {
        path:'booking', component:SeatSelectionComponent
    }
];
