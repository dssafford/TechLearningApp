import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';
import {PageNotFoundComponent} from './components/page-not-found.component';
import {MaterialModule} from './modules/material.module';
import 'hammerjs';


import {AppRoutingModule} from './app-routing.module';
import {MoviesModule} from './modules/movies/movies.module';


@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    ReactiveFormsModule, MoviesModule, AppRoutingModule, MaterialModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
