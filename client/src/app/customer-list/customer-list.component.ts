import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../customer-service.service'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
   public customerData=[];
  constructor(private custService:CustomerServiceService) { }

  ngOnInit(): void {
    this.custService.getMethod().subscribe(data=>this.customerData=data);
   
  }

}
