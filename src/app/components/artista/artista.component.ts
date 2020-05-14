import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',

})
export class ArtistaComponent {

  artista:any = {};
  topTracks:any[] = [];

  loading:boolean;

  constructor(private activatedRouter:ActivatedRoute,
              private spotify:SpotifyService) {
    this.loading = true
    this.activatedRouter.params.subscribe( params => {
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
    })
  }

  getArtista( id:string ){
    this.loading = true
    this.spotify.getArtista( id).subscribe( data => {
      // console.log(data)
      this.artista = data
      this.loading = false
    })
  }

  getTopTracks( id:string ){
    this.spotify.getTopTracks( id ).subscribe( data => {
        console.log(data)
        this.topTracks = data
    })
  }



}
