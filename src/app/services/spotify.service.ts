import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Constants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }

  getQuery(query:string){
    const url = Constants.SPOTIFY_URL + `${ query }`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCmWd8x7TH7D5cERCKu2DJGKB-4ErRAHGXPCiN4W-UIyPZ0ebwytwvZE5KhNXqLF5CgUMp2u8e0lDGqSn6FC1hPcf9qNK_hcvKMBMDs2b6nkowKlm7842ZpDjIUXbPLK64X1_zkwdrteKYdIuUf-b6EF5XglVU'
    })

    return this.http.get(url,{headers})
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=50').pipe( map( data => data['albums'].items ))
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items))
  }

  getArtista(id:string){
     return this.getQuery(`artists/${ id }`)//.pipe( map( data => data['artist'].items))
  }

  getTopTracks(id:string){
      return this.getQuery(`artists/${ id }/top-tracks?country=US`).pipe( map( data => data['tracks']))
  }


}
