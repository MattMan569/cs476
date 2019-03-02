import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { LandingComponent } from './core/landing/landing.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, HeaderComponent, LandingComponent, NotFoundComponent, DashboardComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
