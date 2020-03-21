import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
public formData:any;
  constructor(private custService:CustomerServiceService,private router:Router) {
    this.formData={
      id:null,
      fName:null,
      lName:null,
      email:null,
      gender:null,
      address:null,
      city:null,
      state:null,
    }  
   }

  ngOnInit(): void {
  }
  addDetails(){
    this.custService.insertMethod(this.formData)
    .subscribe(data=>{
      console.log(data);
    });
    alert('data inserted sucessfully');
    this.router.navigate(['/customerDetails']);
  }

}
