import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverDetailsComponent } from './components/drivers/driver.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { PageNotFoundComponent } from './components/notfound/not-found.component'

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/seasons', pathMatch: 'full' },
    { path: 'seasons', component: SeasonsComponent },
    { path: 'drivers', component: DriversComponent },
    { path: 'drivers/:filter', component: DriversComponent },
    { path: 'driver/:id', component: DriverDetailsComponent },
    { path: 'circuits', component: CircuitsComponent },
    { path: 'circuits/:id/:year', component: CircuitsComponent },
    { path: '**', component: PageNotFoundComponent } //Show when select route is not register
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(MAINMENU_ROUTES);
