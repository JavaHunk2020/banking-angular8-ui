import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CustomerEnquiry } from '../models/customer-enquiry.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-customer-enquiry',
  templateUrl: './customer-enquiry.component.html',
  styleUrls: ['./customer-enquiry.component.css']
})
export class CustomerEnquiryComponent implements OnInit {
  
  public customerEnquiry:CustomerEnquiry=new CustomerEnquiry();

  constructor(private customerService:CustomerService,private router: Router,private messageService:MessageService) {

   }

  // private customerService:CustomerService;
  // constructor(customerService:CustomerService) {
  //    this.customerEnquiry=this.customerEnquiry;
  // }

  ngOnInit(): void {
  }
 
  public processEnquiry() : void {
      console.log(this.customerEnquiry);
      //calling service layer
       let promise:Observable<CustomerEnquiry>=this.customerService.createEnquiry(this.customerEnquiry);
       promise.subscribe(data=>{
                this.messageService.updateMessage("Customer enquiry is submitted successfully!!!!");
                this.router.navigate(['/login']);
      });
  }

}
