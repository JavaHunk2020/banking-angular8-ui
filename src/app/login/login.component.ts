import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.model';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  public username:String;
  public password:String;
  public message:String;
  private subscription:any;
  constructor(private authService :AuthService,private router: Router,private messageService:MessageService) {
    this.subscription=this.messageService.getObserable().subscribe(data=>{
      this.message=data;
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  public authUser():void{
     let auth:Auth=new Auth();
     auth.username=this.username;
     auth.password=this.password;
     this.authService.authUser(auth).subscribe(data=>{
          if(data==null){
            this.message="Sorry, username and password are not correct!"
          }else{
            //go to customer home dashboard
            this.router.navigate(['/chome']);
          }
          console.log(data); 
     });
  }

}
