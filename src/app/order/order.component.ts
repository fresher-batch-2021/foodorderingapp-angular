import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// $("#header").load("header.html");
 orderplaced() {
const name = document.querySelector("#name").value;
const phonenumber = document.querySelector("#phonenumber").value;
const DeliveryDate = document.querySelector("#DeliveryDate").value;
const DeliveryTime = document.querySelector("#DeliveryTime").value;
const quantity = document.querySelector("#quantity").value;
const address = document.querySelector("#address").value;

       
if (name == "" || name == null || name.trim() == "")
{
alert("Name cannot be blank");
     
}
else if (phonenumber == "" || phonenumber == null || phonenumber.trim() == "")
{
 alert("Phone number cannot be blank");
}
else if (DeliveryDate == "" || DeliveryDate == null || DeliveryDate.trim() == "")
 {
 alert("date cannot be blank");
 }
else  if (DeliveryTime == "" || DeliveryTime ==null || DeliveryTime.trim() ==""){
     alert("Time cannot be blank");
     }
else if (quantity ==="" || quantity === null || quantity.trim() == "" || quantity <= 0){
         alert("Quantity cannot be blank");
         }
else if (address === "" || address === null || address.trim() == ""){
             alert("Address cannot be blank");
             }
else
              {
                const regobj = {
                "Name":name,
                "phonenumber":phonenumber,
                "date":date,
                 "time":time,
                 "quantity":quantity,
                 "address":address
            
                  };

                     alert("Successfully Registered");
                     window.location.href = "payment.html";
       
              }
          }

