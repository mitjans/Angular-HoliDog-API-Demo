import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomFetchComponent } from './random-fetch/random-fetch.component';
import { BreedFetchComponent } from './breed-fetch/breed-fetch.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomFetchComponent,
    BreedFetchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
