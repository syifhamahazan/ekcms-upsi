import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    headers = new HttpHeaders();
    options = { header: this.headers, withCredintials: false };

    constructor(private http: HttpClient) {}

    post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), this.options);
  }
}
