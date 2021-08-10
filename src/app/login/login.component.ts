import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    EmailId:string="";
    password:string="";
  
  login()
{
  if(this.EmailId=" ")
  {
    alert("Email cannotbe empty");
  }
  else{
    alert("successfully registered");
  }
}
}
