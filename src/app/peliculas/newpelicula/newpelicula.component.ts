import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PeliculasService} from '../peliculas.service';

@Component({
  selector: 'app-newpelicula',
  templateUrl: './newpelicula.component.html',
  styleUrls: ['./newpelicula.component.scss'],
  providers:[PeliculasService]
})
export class NewpeliculaComponent implements OnInit {

  private moviesData: any;
  public newData: any = {
    movieName: '',
    movieDate: new Date(),
    movieState: 'activo'
  }
  constructor(private router: Router, private servicePeliculas: PeliculasService) { }

  ngOnInit() {
    const moviesData = JSON.parse(localStorage.getItem('movies'));
    if(moviesData){
      this.moviesData = moviesData;
    }
  }

  gettingData(event){
    console.log('event ', event);
    const id = Math.floor(Math.random()*900000) + 10000;
    const newObject = {title: event.movieName, release_date: event.movieDate, video: event.movieState, id};
    const newArrayMovies = [...this.moviesData, newObject];
    localStorage.setItem('movies', JSON.stringify(newArrayMovies));
    this.router.navigate(['peliculas']);
  }

  closeForm(event){
    this.router.navigate(['peliculas']);
  }

}
