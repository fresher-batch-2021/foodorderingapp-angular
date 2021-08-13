import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EmailId:string="";
    password:string="";
  

  constructor() { }

  ngOnInit(): void {
  }
   
  login()
{
  let EmailId=this.EmailId;
  let password=this.password;
  let formalvalues={
    "EmailId":EmailId,
    "password":password
  };
   login()
{
    
  let email=this.EmailId;
  let password=this.password;

        if(password  =="")
        {
         alert("password cannot be blank")
        }
    
         else if (password.length < 8)
        {
            alert("password must be 8 characters");

        }

        else
        {
              const userobj={
             "email" : email,
              "password": password
         };
     console.log(userobj);
     const url="https://product-mock-api.herokuapp.com/foodapp/api/v1/auth/login";
     axios.post(url,userobj).then(res=>
     {
         let data=res.data;
         localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
        alert("login successfull");
        if(user.role == "ADMIN"){
        window.location.href="";
        }
        else{
          window.location.href="";
        }
      }).catch(err =>{
        console.log(err);
        alert("unable to login");

      });

  
  
