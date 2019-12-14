import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { first, startWith } from 'rxjs/operators';
import { Client, ClientFilters } from '../../interfaces/client';
import { FieldNames } from '../../pipes/numbers-to-date.pipe';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'bo-clients-list',
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
  public displayedDataFields: { name: string; label?: string }[] = [
    {
      name: 'registrationDate',
      label: 'Registreerimis kuup.',
    },
    {
      name: 'email',
      label: 'E-mail',
    },
    {
      name: 'phone',
      label: 'Telefon',
    },
    {
      name: 'address',
      label: 'aadress',
    },
    {
      name: 'MFD',
    },
    {
      name: 'gSPHos',
    },
    {
      name: 'gSPHod',
    },
    {
      name: 'gCYLod',
    },
    {
      name: 'gCYLos',
    },
    {
      name: 'gAXISod',
    },
    {
      name: 'gAXISos',
    },
    {
      name: 'gADDod',
    },
    {
      name: 'gADDos',
    },
    {
      name: 'gPD',
    },
    {
      name: 'cBC',
    },
    {
      name: 'notes',
      label: 'Märkmed'
    },
  ];

  public filtersForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    birthYear: new FormControl(null),
    birthMonth: new FormControl(null),
    birthDay: new FormControl(null),
  });
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
    this.filtersForm.valueChanges.pipe(startWith(this.filtersForm.value)).subscribe((values: ClientFilters) => {
      this.handleSearch(values);
    });
  }

  private handleSearch(filters: ClientFilters) {
    this.clientsService.getClients(filters).pipe(first()).subscribe((clients) => {
      this.dataSource.data = clients;
    });
  }
}
