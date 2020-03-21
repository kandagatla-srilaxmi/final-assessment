import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../customer-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerData=[];
  constructor(private custService:CustomerServiceService,private router:Router) {  }

  ngOnInit(): void {
    this.custService.getMethod().subscribe(data=>this.customerData=data);
  }


  deleteCustomer(id) {
    console.log({ id })
    this.custService.deleteMethod(id).subscribe(data => {
      console.log(data);
      this.custService.getMethod().subscribe(data => this.customerData = data);
    });
    alert("deleted");

  }
  editCustomer(id){
    this.router.navigate(['/editCustomer', id])
  }


}
