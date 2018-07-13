import { Component, Input } from '@angular/core';
import {DataService} from "../services/DataService";
import {Customer} from "../models/Customer";


@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataService]
})

export class CustomerDetailsComponent {

  @Input() customer: Customer;

  constructor(private dataService: DataService) {}

  delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}
