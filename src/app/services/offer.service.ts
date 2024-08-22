import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class OfferService {
  private apiUrl = 'https://www.findleasing.nu/api/offers/?apikey=57cbc4167ddceb00519e67907d69331c96b1dead'; // API endpoint

  constructor(private http: HttpClient) {}

  getOffers(): Observable<{ results: Offer[] }> {
    // Sends a GET request to the API and returns an observable with the results
    return this.http.get<{ results: Offer[] }>(this.apiUrl);
  }

  getOfferById(id: string): Observable<Offer> {
    // Sends a GET request to fetch a specific offer by ID
    return this.http.get<Offer>(`${this.apiUrl}${id}/`);
  }
}
