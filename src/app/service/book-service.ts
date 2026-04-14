import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../interface/book-interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiURL ="http://127.0.0.1:8000/api";

  constructor(private http:HttpClient){}
  getBooks():Observable<BookInterface[]>{

     return this.http.get<BookInterface[]>(this.apiURL+"/bookings");

  }
    createBook(data: BookInterface): Observable<BookInterface>{

     return this.http.post<BookInterface>(this.apiURL+"/bookings",data);
}
}
