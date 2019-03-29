import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInfo } from '../models/contact-info.model';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/contactinfo";
  }

  get$ = (): Observable<ContactInfo[]> => this.http.get<ContactInfo[]>(this.url);
 
  post$ = (contactinfo: ContactInfo): Observable<ContactInfo> => this.http.post<ContactInfo>(this.url, { contactinfo });
 
  patch$ = (contactinfoId: number, contactinfo: ContactInfo): Observable<ContactInfo> => this.http.patch<ContactInfo>(`${this.url}/${contactinfoId}`, { contactinfo });
 
  delete$ = (contactinfoId: number): Observable<ContactInfo> => this.http.delete<ContactInfo>(`${this.url}/${contactinfoId}`);
}
