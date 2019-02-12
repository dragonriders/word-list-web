import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { WordnavComponent } from './wordnav/wordnav.component';
import { RelatedComponent } from './related/related.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordListItemDirective } from './word-list/word-list-item.directive';
import { ImagePreloadDirective } from './word-list/image-preload.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PracticeComponent,
    WordnavComponent,
    RelatedComponent,
    MarketplaceComponent,
    WordListComponent,
    WordListItemDirective,
    ImagePreloadDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
