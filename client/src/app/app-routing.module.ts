import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


const routes: Routes = [
  {path:'', redirectTo:'/customerList', pathMatch: 'full'},
  {path:'customerList',component:CustomerListComponent},
  {path:'customerDetails',component:CustomerDetailsComponent},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'editCustomer',component:EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
