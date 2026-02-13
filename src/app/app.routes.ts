import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Register} from './components/register/register';

export const routes: Routes = [
    {
    path: 'home',
    component: Home,
   } , {
     path:'profile',
    component: Profile,
    } ,{
     path: 'register',
     component: Register,
    },
];
