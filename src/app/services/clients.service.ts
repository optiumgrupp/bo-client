import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientFilters } from '../interfaces/client';
import { PaginatedResult, Pagination } from '../interfaces/pagination';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(
    private http: HttpClient,
  ) {}

  public getClients(filters: ClientFilters, pagination: Pagination): Observable<PaginatedResult<Client>> {
    return this.http.post<PaginatedResult<Client>>(
      ApiService.constructUrl('clients'),
      {
        ...filters,
        ...pagination,
      },
    );
  }
}
