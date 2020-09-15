import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerEnquiryComponent } from './customer-enquiry/customer-enquiry.component';

const routes: Routes = [  
{
  component: CustomerhomeComponent,
  path: "chome"
},
{
  component: CustomerEnquiryComponent,
  path: "customerEnquiry"
},
{
  component: LoginComponent,
  path: "login"
},
{
  component: LoginComponent,
  path: "**"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
