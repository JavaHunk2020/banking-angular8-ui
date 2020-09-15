import { Injectable } from '@angular/core';
import { CustomerEnquiry } from '../models/customer-enquiry.model';
import { AppResponse } from '../models/app.response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public createEnquiry(cenquiry:CustomerEnquiry):Observable<CustomerEnquiry>{
    //METHOD=GET
       //{"code":"200","message":"Customer enquiry is submitted"}
       return this.http.post<CustomerEnquiry>("https://localhost:8443/v3/customers/enquiry",cenquiry);
  }
}
