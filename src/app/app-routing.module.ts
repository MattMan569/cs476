import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LandingComponent } from './core/landing/landing.component';

const routes: Routes = [
    { path: '', component: HomeComponent }, // Default page if user is logged in
    { path: '', component: LandingComponent }, // Default page if user is not logged in
    { path: '**', component: NotFoundComponent }, // Wildcard path, 404 error
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
