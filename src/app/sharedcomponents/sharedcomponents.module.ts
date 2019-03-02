import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcomponentsRoutingModule } from './sharedcomponents-routing.module';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [ButtonComponent, TableComponent],
  imports: [
    CommonModule,
    SharedcomponentsRoutingModule
  ]
})
export class SharedcomponentsModule { }
