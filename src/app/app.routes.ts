import { Routes } from '@angular/router';
import { Tamil } from './IndianMovies/tamil/tamil';
import { Telugu } from './IndianMovies/telugu/telugu';
import { Malayalam } from './IndianMovies/malayalam/malayalam';
import { UserPanel } from './user-panel/user-panel';

export const routes: Routes = [
   
     {
        path:'tamil', component:Tamil
        
    },
     {
        path:'telugu', component:Telugu
        
    },
     {
        path:'malayalam', component:Malayalam
        
    },
    {
        path:'user-panel', component:UserPanel
    }
];
