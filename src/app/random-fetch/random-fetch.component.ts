import { Component, OnInit } from '@angular/core';
import { HoliDogAPI } from '../shared/HoliDogAPI';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'app-random-fetch',
  templateUrl: './random-fetch.component.html',
  styleUrls: ['./random-fetch.component.css']
})
export class RandomFetchComponent implements OnInit {

  loadingImagePath: string = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
  imagePath: string = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
  
  constructor(private api: HoliDogAPI) { }

  ngOnInit() {
    this.imagePath = this.loadingImagePath;
    this.api.randomImage().subscribe((data: string) => this.imagePath = data["message"]);
  }

  onClick() {
    this.imagePath = this.loadingImagePath;
    this.api.randomImage().subscribe((data: string) => this.imagePath = data["message"]);
  }

}
