import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:String;
  public password:String;
  public message:String;
  
  constructor(private authService :AuthService,private router: Router) {

  }

  ngOnInit(): void {
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
