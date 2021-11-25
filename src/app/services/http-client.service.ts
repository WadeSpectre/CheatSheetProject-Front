import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
private url = 'http://localhost:8081/'

  constructor(private http: HttpClient) { }


  getAllBills() {
    let tatUrl = this.url + "tatouages";
    const headers= new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'http//localhost:4200')
    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    return this.http.get(tatUrl,{'headers': headers});

  }
}
