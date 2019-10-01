import { Component, OnInit } from '@angular/core';

import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  canciones: any = [];
  
  constructor(private songsService:SongsService) {  }

  ngOnInit() {
    
    this.canciones = this.songsService.obtenerLocalStorage();
  }

}
