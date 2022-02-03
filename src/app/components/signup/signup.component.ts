import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.signupForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      user : new FormControl(),
      password : new FormControl()
    })
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      user : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  signup(){  
    // console.log("rishikesh");
    window.localStorage.setItem(this.signupForm.value.user, JSON.stringify(this.signupForm.value));
    this.router.navigateByUrl("");
  }


  get fname(){
    return this.signupForm.get('fname');
  }
  get lname(){
    return this.signupForm.get('lname');
  }
  get user(){
    return this.signupForm.get('user');
  }
  get password(){
    return this.signupForm.get('password');
  }


}
