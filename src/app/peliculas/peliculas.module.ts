import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from "angular-6-datatable";
import { FormsModule } from "@angular/forms";

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { InitpeliculasComponent } from './initpeliculas/initpeliculas.component';
import { MainpeliculasComponent } from './mainpeliculas/mainpeliculas.component';
import { NewpeliculaComponent } from './newpelicula/newpelicula.component';
import { EditpeliculaComponent } from './editpelicula/editpelicula.component';
import { FormpeliculaComponent } from './formpelicula/formpelicula.component';

@NgModule({
  declarations: [InitpeliculasComponent, MainpeliculasComponent, NewpeliculaComponent, EditpeliculaComponent, FormpeliculaComponent],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    DataTableModule,
    FormsModule
  ]
})
export class PeliculasModule { }
