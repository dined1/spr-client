import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from "./components/customer-details.component";
import {CustomersComponent} from "./components/customers.component";
import {CreateCustomerComponent} from "./components/create-customer.component";
import {SearchCustomersComponent} from "./components/search-customers.component";
import {DataService} from "./services/DataService";
import {LoginComponent} from "./components/login.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbylastname', component: SearchCustomersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {}
