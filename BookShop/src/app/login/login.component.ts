import { Router } from '@angular/router';
import { authService } from './../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

}


