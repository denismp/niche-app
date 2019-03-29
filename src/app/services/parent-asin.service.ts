import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParentAsin } from '../models/parent-asin.model';

@Injectable({
  providedIn: 'root'
})
export class ParentAsinService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/parentasin";
  }

  get$ = (): Observable<ParentAsin[]> => this.http.get<ParentAsin[]>(this.url);
 
  post$ = (parentasin: ParentAsin): Observable<ParentAsin> => this.http.post<ParentAsin>(this.url, { parentasin });
 
  patch$ = (parentasinId: number, parentasin: ParentAsin): Observable<ParentAsin> => this.http.patch<ParentAsin>(`${this.url}/${parentasinId}`, { parentasin });
 
  delete$ = (parentasinId: number): Observable<ParentAsin> => this.http.delete<ParentAsin>(`${this.url}/${parentasinId}`);
}
