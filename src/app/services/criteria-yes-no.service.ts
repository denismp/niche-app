import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CriteriaYesNo } from '../models/criteria-yes-no.model';

@Injectable({
  providedIn: 'root'
})
export class CriteriaYesNoService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/criteriayesno";
  }

  get$ = (): Observable<CriteriaYesNo[]> => this.http.get<CriteriaYesNo[]>(this.url);
 
  post$ = (criteriayesno: CriteriaYesNo): Observable<CriteriaYesNo> => this.http.post<CriteriaYesNo>(this.url, { criteriayesno });
 
  patch$ = (criteriayesnoId: number, criteriayesno: CriteriaYesNo): Observable<CriteriaYesNo> => this.http.patch<CriteriaYesNo>(`${this.url}/${criteriayesnoId}`, { criteriayesno });
 
  delete$ = (criteriayesnoId: number): Observable<CriteriaYesNo> => this.http.delete<CriteriaYesNo>(`${this.url}/${criteriayesnoId}`);
}
