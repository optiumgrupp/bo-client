import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { PipesModule } from '../../pipes/pipes.module';
import { ClientsListRoutingModule } from './clients-list-routing.module';
import { ClientsListComponent } from './clients-list.component';


@NgModule({
  declarations: [ClientsListComponent],
  imports: [
    CommonModule,
    ClientsListRoutingModule,
    MatTableModule,
    PipesModule,
    MomentModule,
  ]
})
export class ClientsListModule { }
