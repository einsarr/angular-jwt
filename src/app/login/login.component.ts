import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  title = "Login"

  loginForm!:FormGroup;
  errorMessage = undefined;

  constructor(private fb: FormBuilder,private router:Router, private authService : AuthService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email : this.fb.control(""),
      password : this.fb.control(""),
    })
  }

  handleLogin(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(email,password)
      .then(resp=>{
        alert("ok");
        this.router.navigateByUrl("/admin")
      })
      .catch(error=>{
        this.errorMessage = error;
      })
  }
}
