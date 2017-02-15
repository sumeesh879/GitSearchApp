import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './components/github.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: GithubComponent
    // }
];

export const route: ModuleWithProviders = RouterModule.forRoot(routes);