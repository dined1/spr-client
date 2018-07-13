import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from "./components/customer-details.component";
import {CustomersComponent} from "./components/customers.component";
import {CreateCustomerComponent} from "./components/create-customer.component";
import {SearchCustomersComponent} from "./components/search-customers.component";
import {DataService} from "./services/DataService";

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {}
