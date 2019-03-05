import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formpelicula',
  templateUrl: './formpelicula.component.html',
  styleUrls: ['./formpelicula.component.scss']
})
export class FormpeliculaComponent implements OnInit {
  @Output() returnData = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  @Input() getData: any;

  private movieName: string;
  private movieDate: any;
  private movieState: string;

  constructor() {
  }

  ngOnInit() {
    if (this.getData){
      this.movieName = this.getData.movieName;
      this.movieDate = this.getData.movieDate;
      this.movieState = this.getData.movieState;
    }
  }

  saveData(){
    const newObject = {
      movieName: this.movieName,
      movieDate: this.movieDate,
      movieState: this.movieState
    };
    this.returnData.emit({...newObject});
  }

  closing(){
    this.closeForm.emit({close:true});
  }
}
