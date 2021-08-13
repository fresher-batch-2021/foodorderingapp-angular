import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { Veg } from './veg.html/veg.html.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { OrderComponent } from './order/order.component';
import { AddcartComponent } from './addcart/addcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    Veg.HtmlComponent,
    VegComponent,
    NonvegComponent,
    OrderComponent,
    AddcartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
