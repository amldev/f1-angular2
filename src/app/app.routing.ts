import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DriversComponent } from './components/drivers/drivers.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CircuitsComponent } from './components/circuits/circuits.component';

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/seasons', pathMatch: 'full' },
    { path: 'seasons', component: SeasonsComponent },
    { path: 'drivers', component: DriversComponent },
    { path: 'circuits', component: CircuitsComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(MAINMENU_ROUTES);
