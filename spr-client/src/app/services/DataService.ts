import {Injectable} from '@angular/core'
import {Headers, Http} from '@angular/http'

import {Customer} from "../models/Customer";

@Injectable()
export class DataService {

  private customersUrl = 'allUsers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

// Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(DataService.handleError);
  }

  getCustomersByLastName(lastName: string): Promise<Customer[]> {
    const url = `findbylastname/${lastName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(DataService.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post("postcustomer", JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(DataService.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(DataService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
