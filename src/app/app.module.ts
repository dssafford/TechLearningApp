import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './components/page-not-found.component';
import {MaterialModule} from './modules/material.module';
import 'hammerjs';


import {AppRoutingModule} from './app-routing.module';
import {MoviesModule} from './modules/movies/movies.module';
import {CharactersModule} from './modules/characters/characters.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    ReactiveFormsModule, MoviesModule, CharactersModule, AppRoutingModule, MaterialModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
