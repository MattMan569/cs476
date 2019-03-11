// Angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LandingComponent } from './core/landing/landing.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { MessagesComponent } from './home/messages/messages.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { UsersComponent } from './home/users/users.component';
import { SignupComponent } from './auth/signup/signup.component';

// Custom services
import { AuthGuard } from './auth/auth-guard.service';
import { ProfileComponent } from './home/profile/profile.component';

const routes: Routes = [
    { path: '', component: LandingComponent }, // Default page if user is not logged in
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Default page if user is logged in
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
    { path: 'projects:id', component: ProjectsComponent, canActivate: [AuthGuard] }, // Details of single project
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile:id', component: ProfileComponent, canActivate: [AuthGuard] }, // User of given ID
    { path: 'signup', component: SignupComponent },
    // { path: 'signin', component: UsersComponent }, // TODO
    { path: '**', component: NotFoundComponent }, // Wildcard path, 404 error
    // { path: '**', redirectTo: 'home' }, // Wildcard path, redirect home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
