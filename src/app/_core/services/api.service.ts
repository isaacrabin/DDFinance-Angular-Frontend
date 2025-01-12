import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy.model';
import { ENV } from '../../global-configurations';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]>{
    return this.http.get<Policy[]>(
      ENV.BASE_URL + 'Policies',
    );
  }

  addPolicy(payload: Policy): Observable<Policy>{
    return this.http.post<Policy>(
      ENV.BASE_URL + 'Policies',payload
    );
  }

  updatePolicy(id: number, payload: Policy): Observable<Policy>{
    return this.http.put<Policy>(
      ENV.BASE_URL + `Policies/${id}`,payload
    );
  }

  deletePolicy(id: number): Observable<Policy>{
    return this.http.delete<Policy>(
      ENV.BASE_URL + `Policies/${id}`,{}
    );
  }
}
