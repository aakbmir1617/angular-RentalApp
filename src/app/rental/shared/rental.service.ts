import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  
  constructor(private http:HttpClient) { }

  public getRentals(): Observable<any> {
    return this.http.get('/api/v1/rentals');
  }

  public getRentalById(rentalId: String): Observable<any> {
    return this.http.get('/api/v1/rentals/'+rentalId);
  }

}
