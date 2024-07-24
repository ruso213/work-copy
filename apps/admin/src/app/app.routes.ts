import { Route } from '@angular/router';
import { MultimediaComponent } from '../pages/multimedia/multimedia.component';

export const appRoutes: Route[] = [
    {
        path:'multimedia',
        component:MultimediaComponent
    },
    {
        path:"**",
        pathMatch: "full",
        redirectTo:"multimedia"
    }
];
