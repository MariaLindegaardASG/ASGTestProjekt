import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://din-backend-url.com/api/cars';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  getCar(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.apiUrl}/${id}`);
  }
}
