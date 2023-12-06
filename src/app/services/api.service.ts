import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000";
  }

  public searchAnime(anime: string) {
    console.log("fazendo request");
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Access-Control-Allow-Headers': 'Content-Type'});
    return this.httpClient
      .get(
        `${this.url}/anime/search/${anime}`, {headers:headers}
      )
  }
}
