import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InitialComponent } from './initial/initial.component';


const routes: Routes = [
  {path:'home/:id', component: HomeComponent},
  {path:'news-details/:id', component: NewsDetailsComponent},
  {path:'', component: InitialComponent},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
