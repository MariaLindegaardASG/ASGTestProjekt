import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private apiUrl = 'https://your-api-url.com/api/offers/?apikey=57cbc4167ddceb00519e67907d69331c96b1dead';

  constructor(private http: HttpClient) {}

  getOffers(): Observable<{ results: Offer[] }> {
    return this.http.get<{ results: Offer[] }>(this.apiUrl);
  }

  getOfferById(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}${id}/`);
  }
}
