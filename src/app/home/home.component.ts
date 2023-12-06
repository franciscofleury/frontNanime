import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isHome: boolean = true;
  value: string = "";
  anime: any;

  constructor(private apiService: ApiService) {

  }

  public onSearch() {
    console.log(this.value);
    this.apiService.searchAnime(this.value).subscribe((response: any)=> {
      console.log(response);
      this.anime = {
        name: response.anime.name,
        description: response.anime.description,
        imgUrl: response.anime.image_url,
        rating: response.anime.global_rating
      }
      this.isHome = false;
    });
  }
}
