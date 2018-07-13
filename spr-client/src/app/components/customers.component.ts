import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import {DataService} from "../services/DataService";

@Component({
  selector: 'customers-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})


export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) {}

  getCustomers() {
    this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
}
