import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientFilters } from '../interfaces/client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(
    private http: HttpClient,
  ) {}

  public getClients(filters: ClientFilters): Observable<Client[]> {
    return this.http.post<Client[]>(
      ApiService.constructUrl('clients'),
      filters,
    );
  }
}
