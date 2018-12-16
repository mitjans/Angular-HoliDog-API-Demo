import { Component, OnInit } from '@angular/core';
import { HoliDogAPI } from '../shared/HoliDogAPI';

@Component({
  selector: 'app-breed-fetch',
  templateUrl: './breed-fetch.component.html',
  styleUrls: ['./breed-fetch.component.css']
})
export class BreedFetchComponent implements OnInit {

  imagePath: string = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
  breedList: string[] = [];

  constructor(private api: HoliDogAPI) { }

  ngOnInit() {
    this.api.listAllBreeds().subscribe((data: JSON) => {
      let breedsDict = data["message"];
      for (let breed in breedsDict) {
        if (breedsDict[breed].length == 0) {
          this.breedList.push(breed);
        } else {
          breedsDict[breed].forEach(subbreed => {
            this.breedList.push(subbreed + ' ' + breed);
          });
        }
      }
      console.log(this.breedList);
    })
  }

  onClick() {
    
  }

}
