import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { DataDisplayModule } from '../../components/data-display/data-display.module';
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
    DataDisplayModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class ClientsListModule { }
