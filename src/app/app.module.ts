import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { LandingComponent } from './core/landing/landing.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MessagesComponent } from './home/messages/messages.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { UsersComponent } from './home/users/users.component';
import { UserComponent } from './home/user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        LandingComponent,
        NotFoundComponent,
        MessagesComponent,
        ProjectsComponent,
        CalendarComponent,
        UsersComponent,
        UserComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
