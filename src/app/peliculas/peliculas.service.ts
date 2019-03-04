import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) {
  }

  getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=472054858cd9f6cc659aff023f5c6866';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    return this.http.get(url, options);
  }
}
