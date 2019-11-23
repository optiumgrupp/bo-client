import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public static joinWithSlash(...urlParts: string[]): string {
    return urlParts.reduce((previousValue, currentValue) => Location.joinWithSlash(previousValue, currentValue), '');
  }
}
