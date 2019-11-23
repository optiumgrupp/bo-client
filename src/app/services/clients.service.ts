import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(
    private http: HttpClient,
  ) {}

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(ApiService.constructUrl('clients'));
  }
}
