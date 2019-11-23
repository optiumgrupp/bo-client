import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Client } from '../../interfaces/client';
import { FieldNames } from '../../pipes/numbers-to-date.pipe';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  public dataSource = new MatTableDataSource<Client>([]);
  public displayedColumns: string[] = ['id', 'name', 'dateOfBirth'];
  public fieldnames: FieldNames = {
    day: 'birthDay',
    month: 'birthMonth',
    year: 'birthDate',
  } ;

  constructor(
    private clientsService: ClientsService,
  ) {}

  public ngOnInit() {
    this.clientsService.getClients().pipe(first()).subscribe((clients) => {
      this.dataSource.data = clients;
    });
  }
}
