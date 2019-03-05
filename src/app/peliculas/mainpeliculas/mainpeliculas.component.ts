import {Component, OnInit} from '@angular/core';
import {PeliculasService} from '../peliculas.service';

@Component({
  selector: 'app-mainpeliculas',
  templateUrl: './mainpeliculas.component.html',
  styleUrls: ['./mainpeliculas.component.scss'],
  providers: [PeliculasService]
})
export class MainpeliculasComponent implements OnInit {
  private dataPeliculas;

  constructor(private servicePeliculas: PeliculasService) {
  }

  ngOnInit() {
    const dataPeliculas = JSON.parse(localStorage.getItem('movies'));

    if(dataPeliculas){
      this.dataPeliculas = dataPeliculas;
    }else{
      this.servicePeliculas.getMovies().subscribe((response) => {
        console.log('response movies ', response['results']);
        this.dataPeliculas = response['results'];
        localStorage.setItem('movies', JSON.stringify(this.dataPeliculas));
      });
    }
  }

}
