import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './word-list/practice/practice.component';
import { LearnComponent } from './word-list/learn/learn.component';
import { RelatedComponent } from './related/related.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { WordListComponent } from './word-list/word-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'learn', component: LearnComponent,
  },
  {
    path: 'practice', component: PracticeComponent,
  },
  {
    path: 'related', component: RelatedComponent
  },
  {
    path: 'marketplace', component: MarketplaceComponent
  },
  {
    path: ':id', component: WordListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
