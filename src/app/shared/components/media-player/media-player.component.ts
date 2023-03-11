import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{

  mockCover: any = 
    {
      cover: "https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2022/08/DREDD.png",
      album: "Inferno",
      name: "Limbo"
    };
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
