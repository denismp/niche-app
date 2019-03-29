import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipmentInfo } from '../models/shipment-info.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentInfoService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/niche/shipmentinfo";
  }

  get$ = (): Observable<ShipmentInfo[]> => this.http.get<ShipmentInfo[]>(this.url);
 
  post$ = (shipmentinfo: ShipmentInfo): Observable<ShipmentInfo> => this.http.post<ShipmentInfo>(this.url, { shipmentinfo });
 
  patch$ = (shipmentinfoId: number, shipmentinfo: ShipmentInfo): Observable<ShipmentInfo> => this.http.patch<ShipmentInfo>(`${this.url}/${shipmentinfoId}`, { shipmentinfo });
 
  delete$ = (shipmentinfoId: number): Observable<ShipmentInfo> => this.http.delete<ShipmentInfo>(`${this.url}/${shipmentinfoId}`);
}
