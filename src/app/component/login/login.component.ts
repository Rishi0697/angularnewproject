import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm :  FormGroup;
  constructor(private fb:FormBuilder,  private router: Router ) {
    this.loginForm = new FormGroup({
      username : new FormControl(),
      password : new FormControl()
    })
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(5)])
    })
    }

 
  login(){
    console.log("username ", this.loginForm.value.username)
   let name: string =  JSON.parse(JSON.stringify(localStorage.getItem(this.loginForm.value.username)));
   console.log(JSON.parse(name).password);

   if(this.loginForm.value.username == JSON.parse(name).user && this.loginForm.value.password == JSON.parse(name).password){
     alert("login successfully");
     this.router.navigateByUrl("/studentlist");
  // this.routerLink
   }
   else{
     alert("invalid user");
   }
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
