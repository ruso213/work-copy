import { Route } from '@angular/router';
import { MultimediaComponent } from '../pages/multimedia/multimedia.component';
import { FolderComponent } from '../pages/folder/folder.component';
import { LoginComponent } from '../pages/login/login.component';

export const appRoutes: Route[] = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'multimedia',
        component:MultimediaComponent
    },
    {
        path:'folder',
        component:FolderComponent
    },
    {
        path:"**",
        pathMatch: "full",
        redirectTo:"multimedia"
    }
];
