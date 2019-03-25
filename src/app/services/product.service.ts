import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/product";
  }

  get$ = (): Observable<Product[]> => this.http.get<Product[]>(this.url);
 
  post$ = (product: Product): Observable<Product> => this.http.post<Product>(this.url, { product });
 
  patch$ = (productId: number, product: Product): Observable<Product> => this.http.patch<Product>(`${this.url}/${productId}`, { product });
 
  delete$ = (productId: number): Observable<Product> => this.http.delete<Product>(`${this.url}/${productId}`);
}
