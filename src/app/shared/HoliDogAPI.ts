import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        console.log(this.http)
        return this.http.get(this.listBreedsUrl);
        // console.log(json);
    }

    // 2. Random image (by breed, by sub-breed)
    public randomImage(breed?: string) {

    }

    // MARK: Helper functions
    private getData(url: string) {
        return this.http.get(url)
    }
}