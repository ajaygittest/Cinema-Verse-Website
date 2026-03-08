import { Routes } from '@angular/router';
import { UserPanel } from './user-panel/user-panel';
import { Main } from './main/main';

export const routes: Routes = [

    {
        path: 'list/:language', component: Main

    },
     { path: '', redirectTo: '/list/All', pathMatch: 'full' },
       { path: '**', redirectTo: '/list/All' } ,
    {
        path: 'user-panel', component: UserPanel
    }
];
