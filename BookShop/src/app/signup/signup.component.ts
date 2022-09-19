import { Router } from '@angular/router';
import { authService } from './../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
  }
  signupForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

}
