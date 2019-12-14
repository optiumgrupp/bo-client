import { animate, state, style, transition, trigger } from '@angular/animations';
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
  styleUrls: ['./clients-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsListComponent implements OnInit {
  public dataSource = new MatTableDataSource<Client>([]);
  public displayedColumns: string[] = ['id', 'name', 'dateOfBirth'];
  public fieldnames: FieldNames = {
    day: 'birthDay',
    month: 'birthMonth',
    year: 'birthDate',
  } ;
  public expandedElement: Client = null;

  constructor(
    private clientsService: ClientsService,
  ) {}

  public ngOnInit() {
    this.clientsService.getClients().pipe(first()).subscribe((clients) => {
      this.dataSource.data = clients;
    });
  }
}
