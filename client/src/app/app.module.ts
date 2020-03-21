import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
