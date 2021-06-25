import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroOverviewComponent} from './hero-overview/hero-overview.component';
import {HeroFormComponent} from './hero-form/hero-form.component';

const routes: Routes = [
  {path: 'heroes-list', component: HeroOverviewComponent},
  {path: 'heroes-form', component: HeroFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
