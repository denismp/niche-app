import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CheckPointCriteria } from '../models/check-point-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class CheckpointCriteriaService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/checkpointcriteria";
  }

  get$ = (): Observable<CheckPointCriteria[]> => this.http.get<CheckPointCriteria[]>(this.url);
 
  post$ = (chekcpointcriteria: CheckPointCriteria): Observable<CheckPointCriteria> => this.http.post<CheckPointCriteria>(this.url, { chekcpointcriteria });
 
  patch$ = (checkpointId: number, chekcpointcriteria: CheckPointCriteria): Observable<CheckPointCriteria> => this.http.patch<CheckPointCriteria>(`${this.url}/${checkpointId}`, { chekcpointcriteria });
 
  delete$ = (checkpointId: number): Observable<CheckPointCriteria> => this.http.delete<CheckPointCriteria>(`${this.url}/${checkpointId}`);
}
