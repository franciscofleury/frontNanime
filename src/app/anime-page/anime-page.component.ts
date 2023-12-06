import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent {
  @Input() name: string = "";
  @Input() imgUrl: string = "";
  @Input() rating: string = "";
  @Input() desc: string = "";

  constructor() {}


}
