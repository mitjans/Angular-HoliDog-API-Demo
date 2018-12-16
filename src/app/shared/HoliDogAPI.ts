import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HoliDogAPI {

    private listBreedsUrl: string = "https://dog.ceo/api/breeds/list/all";
    private randomImageUrl: string = "https://dog.ceo/api/breeds/image/random";

    constructor(private http: HttpClient) { }

    // MARK: API Endpoints

    // 1. List all breeds
    public listAllBreeds() {
        return this.http.get(this.listBreedsUrl);
    }

    // 2. Random image (by breed, by sub-breed)
    public randomImage(breed?: string) {
        let url: string;
        if (breed) {
            url = "https://dog.ceo/api/breed/" + breed.split(' ').reverse().join('/') + "/images/random";
        } else {
            url = this.randomImageUrl;
        }
        return this.http.get(url);
    }
}