import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private custService:CustomerServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  // edit() {
  //   this.custService.updateMethod(this.formData)
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  //   alert("updated successfully");
  //   this.router.navigate(['/customerDetails']);
  // }

}
