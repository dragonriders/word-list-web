import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './word-list/practice/practice.component';
import { WordnavComponent } from './wordnav/wordnav.component';
import { RelatedComponent } from './related/related.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordListItemDirective } from './word-list/word-list-item.directive';
import { ImagePreloadDirective } from './word-list/image-preload.directive';
import { DraggableDirective } from './word-list/practice/draggable.directive';
import { HomeSkeletonComponent } from './home/home.skeleton/home.skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PracticeComponent,
    WordnavComponent,
    RelatedComponent,
    MarketplaceComponent,
    WordListComponent,
    HomeSkeletonComponent,
    WordListItemDirective,
    ImagePreloadDirective,
    DraggableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  // exports: [HomeSkeletonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
