import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HoliDog';

  constructor(private titleService: Title) {
    titleService.setTitle("Fetch dog images using HoliDog's API!")
  }
}
