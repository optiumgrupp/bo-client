import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static constructUrl(url: string): string {
    return LocationService.joinWithSlash(environment.apiUrl, url);
  }
}
