// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Vendors
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
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
import { SignupComponent } from './auth/signup/signup.component';

// Directives
import { PhoneMaskDirective } from './auth/signup/phone-mask.directive';
import { ProfileComponent } from './home/profile/profile.component';

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
        SignupComponent,
        PhoneMaskDirective,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgbModule,
        SchedulerModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
