import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DriversComponent } from './drivers/drivers.component';
import { SeasonsComponent } from './seasons/seasons.component';

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/seasons', pathMatch: 'full' },
    { path: 'seasons', component: SeasonsComponent },
    { path: 'drivers', component: DriversComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(MAINMENU_ROUTES);
