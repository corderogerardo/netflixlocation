import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editpelicula',
  templateUrl: './editpelicula.component.html',
  styleUrls: ['./editpelicula.component.scss']
})
export class EditpeliculaComponent implements OnInit {

  private moviesData: any;
  private originalData: any;
  public newData: any = {
    movieName: '',
    movieDate: new Date(),
    movieState: 'activo'
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    const dataEdit = JSON.parse(localStorage.getItem('movieEdit'));
    this.originalData = dataEdit;
    const newData = {
      movieName: dataEdit.title,
      movieDate: dataEdit.release_date,
      movieState: (!dataEdit.video) ? 'inactivo' : 'activo' || dataEdit.video
    };
    this.newData = {...newData};

    const moviesData = JSON.parse(localStorage.getItem('movies'));
    if(moviesData){
      this.moviesData = moviesData;
    }
  }

  gettingData(event) {
    console.log('event ', event);
    const newObject = {id:this.originalData.id, title: event.movieName, release_date: event.movieDate, video: event.movieState};
    console.log('newObject ', newObject);
    const newArray = this.moviesData.map((item)=>{
      if(item.id.toString() === this.originalData.id.toString()){
        return newObject;
      }else{
        return item;
      }
    });
    localStorage.setItem('movies', JSON.stringify(newArray));
    localStorage.removeItem('movieEdit');
    this.router.navigate(['peliculas']);
  }

  closeForm(event) {
    this.router.navigate(['peliculas']);
  }

}
