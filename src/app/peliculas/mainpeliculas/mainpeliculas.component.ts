import {Component, OnInit} from '@angular/core';
import {PeliculasService} from '../peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainpeliculas',
  templateUrl: './mainpeliculas.component.html',
  styleUrls: ['./mainpeliculas.component.scss'],
  providers: [PeliculasService]
})
export class MainpeliculasComponent implements OnInit {
  private dataPeliculas;

  constructor(private servicePeliculas: PeliculasService, private router: Router) {
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

  editMovie(item){
    localStorage.setItem('movieEdit', JSON.stringify(item));
    this.router.navigate(['peliculas/edit']);
  }

  deleteMovie(id){
    console.log('id ', id);
    const newArray = this.dataPeliculas.filter((item)=>{
      if(item.id !== id){
        return item;
      }
    });
    this.dataPeliculas = [...newArray];
    localStorage.setItem('movies', JSON.stringify(newArray));
  }

}
