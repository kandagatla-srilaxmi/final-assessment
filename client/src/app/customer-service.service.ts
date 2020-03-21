import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }


getMethod(): Observable<any> {
  return this.http.get<any>(`http://localhost:5200/getAll`);
}

insertMethod(data): Observable<any> {
  console.log(data);
  return this.http.post<any>(`http://localhost:5200/insert`,data);
}


getById(id): Observable<any> {
  return this.http.get<any>(`http://localhost:5200/get/${id}`);
}

updateMethod(data): Observable<any> {
  return this.http.put<any>(`http://localhost:5200/update`, data);
}

deleteMethod(id): Observable<any> {
  return this.http.delete<any>(`http://localhost:5200/delete/${id}`);
}
}
