import {Injectable} from '@angular/core'
import {Headers, Http} from '@angular/http'

import {User} from "../models/User";

@Injectable()
export class DataService {

  private customersUrl = 'api/allUsers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

// Get all customers
  getCustomers(): Promise<User[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(DataService.handleError);
  }

  getCustomersByLastName(lastName: string): Promise<User[]> {
    const url = "findbylastname/${lastName}";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(DataService.handleError);
  }

  create(customer: User): Promise<User> {
    return this.http
      .post("postcustomer/", JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(DataService.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(DataService.handleError);
  }

  login(user: User): Promise<User>{
    return this.http
      .post("api/login", {headers : this.headers})
      .toPromise()
      .then(res => res.json() as string)
      .catch(DataService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error("Error", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
