import { Route } from '@angular/router';
import { MultimediaComponent } from '../pages/multimedia/multimedia.component';
import { FolderComponent } from '../pages/folder/folder.component';

export const appRoutes: Route[] = [
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
