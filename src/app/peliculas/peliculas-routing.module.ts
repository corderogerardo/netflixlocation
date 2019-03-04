import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitpeliculasComponent} from './initpeliculas/initpeliculas.component';
import {MainpeliculasComponent} from './mainpeliculas/mainpeliculas.component';
import {NewpeliculaComponent} from './newpelicula/newpelicula.component';
import {EditpeliculaComponent} from './editpelicula/editpelicula.component';

const routes: Routes = [
  {
    path: '',
    component: InitpeliculasComponent,
    children: [
      { path: '',
        component: MainpeliculasComponent
      },
      { path: 'new',
        component: NewpeliculaComponent
      },
      { path: 'edit',
        component: EditpeliculaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
