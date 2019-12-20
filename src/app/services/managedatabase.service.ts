import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Managedatabase } from '../models/managedatabase';

@Injectable({
  providedIn: 'root'
})
export class ManagedatabaseService {
  public results:string[];// กำหนดตัวแปร เพื่อรับค่า
  // Inject HttpClient มาใช้ใน component หรือ service.
  constructor(private http: HttpClient) { }
  getData(){
   return this.http.get('/assets/data/managedatabase_data.json')
  }
}
