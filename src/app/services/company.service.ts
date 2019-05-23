import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/company";
  }

  getOne$ = (companyId: number): Observable<Company> => this.http.get<Company>(`${this.url}/${companyId}`);

  get$ = (): Observable<Company[]> => this.http.get<Company[]>(this.url);
 
  post$ = (company: Company): Observable<Company> => this.http.post<Company>(this.url, { company });
 
  patch$ = (companyId: number, company: Company): Observable<Company> => this.http.patch<Company>(`${this.url}/${companyId}`, { company });
 
  delete$ = (companyId: number): Observable<Company> => this.http.delete<Company>(`${this.url}/${companyId}`);
}
