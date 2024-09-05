import { Route } from '@angular/router';
import { MultimediaComponent } from '../pages/multimedia/multimedia.component';
import { FolderComponent } from '../pages/folder/folder.component';
import { SignUpComponent } from '../pages/signup/signup.component';
import { LoginComponent } from '../pages/login/login.component';

export const appRoutes: Route[] = [
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path: 'home',
        children:[
            {
                path:'multimedia',
                component:MultimediaComponent
            },
            {
                path:'folder',
                component:FolderComponent
            },
        ]
    },
   
    {
        path:"**",
        pathMatch: "full",
        redirectTo:"login"
    }
];
