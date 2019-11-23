import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../interfaces/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  private clients: Observable<Client[]>;

  constructor(
    private clientsService: ClientsService,
  ) {}

  public ngOnInit() {
    this.clients = this.clientsService.getClients();
  }
}
