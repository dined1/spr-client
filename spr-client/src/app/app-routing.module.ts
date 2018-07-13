import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from "./components/create-customer.component";
import {CustomersComponent} from "./components/customers.component";
import {SearchCustomersComponent} from "./components/search-customers.component";

const routes: Routes = [
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbylastname', component: SearchCustomersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
