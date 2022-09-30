import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartpageComponent } from './page/startpage/startpage.component';
import {PageNotFoundComponent} from "./page/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
