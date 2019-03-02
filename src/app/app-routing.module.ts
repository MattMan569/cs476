// Angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LandingComponent } from './core/landing/landing.component';

// Custom services
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
    { path: '', component: LandingComponent }, // Default page if user is not logged in
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Default page if user is logged in
    { path: '**', component: NotFoundComponent }, // Wildcard path, 404 error
    // { path: '**', redirectTo: 'home' }, // Wildcard path, redirect home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
