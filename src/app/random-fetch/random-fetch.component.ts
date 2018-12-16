import { Component, OnInit } from '@angular/core';
import { HoliDogAPI } from '../shared/HoliDogAPI';

@Component({
  selector: 'app-random-fetch',
  templateUrl: './random-fetch.component.html',
  styleUrls: ['./random-fetch.component.css']
})
export class RandomFetchComponent implements OnInit {

  imagePath: string = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    
  }

}
