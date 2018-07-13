import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {DataService} from "../services/DataService";

@Component({
  selector: 'customers-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})


export class CustomersComponent implements OnInit {
  customers: User[];
  selectedCustomer: User;

  constructor(private dataService: DataService) {}

  getCustomers() {
    this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(cust: User): void {
    this.selectedCustomer = cust;
  }
}
