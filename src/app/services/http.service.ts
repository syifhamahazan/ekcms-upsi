import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

   post(serviceName: string, data: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //  });
  const body = new HttpParams()
  .set(`grant_type`, data.grant_type)
  .set(`username`, data.username)
  .set(`password`, data.password);
  const apiHeaders = {'Content-Type': 'application/x-www-form-urlencoded'};

    // const options = { header: headers };

  const url = environment.apiUrl + serviceName;
  console.log(apiHeaders, data);
  return this.http.post(url, body.toString(), {headers: apiHeaders, withCredintials: true });
  }

  getProfile(serviceName: string, data: any) {
    console.log(data.token);
    const apiHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + data.token
    };
    const param = new HttpParams()
    .set(`AccessionNo`, data.AccessionNo);
    const url = environment.apiUrl + serviceName;
    console.log (url);
    return this.http.get(url, { headers: apiHeaders , params: param  });
    }
}
