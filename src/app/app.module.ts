import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomFetchComponent } from './random-fetch/random-fetch.component';
import { BreedFetchComponent } from './breed-fetch/breed-fetch.component';
import { HttpClientModule } from '@angular/common/http';
import { HoliDogAPI } from './shared/HoliDogAPI';

@NgModule({
  declarations: [
    AppComponent,
    RandomFetchComponent,
    BreedFetchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HoliDogAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
