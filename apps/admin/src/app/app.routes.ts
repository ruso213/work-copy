import { Route } from '@angular/router';
import { MultimediaComponent } from '../pages/multimedia/multimedia.component';
import { FolderComponent } from '../pages/folder/folder.component';
import { SignUpComponent } from '../pages/signup/signup.component';
import { LoginComponent } from '../pages/login/login.component';
import { authGuard } from '../guards/auth.guard';

export const appRoutes: Route[] = [
    {
        path:'signup',
        component:SignUpComponent,
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path: 'home',
        canActivate:[authGuard],
        children:[
            {
                path:'multimedia',
                component:MultimediaComponent,
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
