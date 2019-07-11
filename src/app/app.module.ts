import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TopComponent } from './shared/top/top.component';
import { FeaturedComponent } from './shared/featured/featured.component';
import { HomeComponent } from './home/home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    FeaturedComponent,
    HomeComponent,
    NewsDetailsComponent,
    NotfoundComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
