import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from "../services/DataService";
import {User} from "../models/User";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent implements OnInit {
  customer = new User;
  submitted = false;
  constructor(private dataService: DataService,
              private location: Location) {}

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new User();
  }

  private save(): void {
    this.dataService.create(this.customer);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
