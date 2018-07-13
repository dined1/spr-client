import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {DataService} from "../services/DataService";

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})

export class SearchCustomersComponent implements OnInit {
  lastName: string;
  customers: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.lastName = "";
  }

  private searchCustomers() {
    this.dataService.getCustomersByLastName(this.lastName).then(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();
  }

}
