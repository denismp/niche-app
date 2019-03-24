import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OurCompanyComponent } from '../components/our-company/our-company.component';
import { OurCompany } from '../models/our-company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurCompanyService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/ourcompany";
  }

  get$ = (): Observable<OurCompany[]> => this.http.get<OurCompany[]>(this.url);
 
  post$ = (ourcompany: OurCompany): Observable<OurCompany> => this.http.post<OurCompany>(this.url, { ourcompany });
 
  patch$ = (ourcompanyId: number, ourcompany: OurCompany): Observable<OurCompany> => this.http.patch<OurCompany>(`${this.url}/${ourcompanyId}`, { ourcompany });
 
  delete$ = (ourcompanyId: number): Observable<OurCompany> => this.http.delete<OurCompany>(`${this.url}/${ourcompanyId}`);
}
