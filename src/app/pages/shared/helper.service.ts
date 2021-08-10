import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from './interfaces/country-response-interfaces';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private http: HttpClient) {}

  public getCountryList(continent: string): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(
      `https://restcountries.eu/rest/v2/region/${continent.toLocaleLowerCase()}`
    );
  }

  public getCountry(country: string): Observable<CountryResponse> {
    return this.http.get<CountryResponse>(
      `https://restcountries.eu/rest/v2/alpha/${country.toLocaleLowerCase()}`
    );
  }
}
