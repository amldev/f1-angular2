import { Routes, RouterModule } from '@angular/router';
import { F1Component } from "./f1/f1.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/f1', pathMatch: 'full' },
    { path: 'f1', component: F1Component }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
