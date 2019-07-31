import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";

import {UserService} from '../../services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(private userSvc:UserService,private router:Router) { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  dologin(){
    let body={email:this.email.value,password:this.password.value},
         key='loggedInUser';
    this.userSvc.loginUser(body).subscribe((data=>{
      console.log(data);
      localStorage.setItem(key,data);
      this.router.navigate(['/home'])
    }),(err)=>{
      console.log(err);
    })
  }
}
