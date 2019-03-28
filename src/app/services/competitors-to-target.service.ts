import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompetitorsToTarget } from '../models/competitors-to-target.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitorsToTargetService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/competitorstotarget";
  }

  get$ = (): Observable<CompetitorsToTarget[]> => this.http.get<CompetitorsToTarget[]>(this.url);
 
  post$ = (checkpointcriteria: CompetitorsToTarget): Observable<CompetitorsToTarget> => this.http.post<CompetitorsToTarget>(this.url, { checkpointcriteria });
 
  patch$ = (checkpointcriteriaId: number, checkpointcriteria: CompetitorsToTarget): Observable<CompetitorsToTarget> => this.http.patch<CompetitorsToTarget>(`${this.url}/${checkpointcriteriaId}`, { checkpointcriteria });
 
  delete$ = (checkpointcriteriaId: number): Observable<CompetitorsToTarget> => this.http.delete<CompetitorsToTarget>(`${this.url}/${checkpointcriteriaId}`);
}
