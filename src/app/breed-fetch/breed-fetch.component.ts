import { Component, OnInit } from '@angular/core';
import { HoliDogAPI } from '../shared/HoliDogAPI';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-breed-fetch',
  templateUrl: './breed-fetch.component.html',
  styleUrls: ['./breed-fetch.component.css']
})
export class BreedFetchComponent implements OnInit {

  loadingImagePath:string = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
  imagePath: string = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
  breedList: string[] = [];
  currentBreed: string;

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
      this.currentBreed = this.breedList[0];
      this.onClick();
    })
  }

  onSelectChange(target: string) {
    this.currentBreed = target;
    this.api.randomImage(this.currentBreed).subscribe((data: string) => this.imagePath = data["message"]);
  }

  onClick() {
    this.imagePath = this.loadingImagePath;
    this.api.randomImage(this.currentBreed).subscribe((data: string) => this.imagePath = data["message"]);
  }

}
