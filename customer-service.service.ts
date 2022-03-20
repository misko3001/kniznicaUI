import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./src/app/models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}`);
  }

  getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${customerId}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}`, customer);
  }
  updateCustomer(customerId: number, customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.apiUrl}/${customerId}`, customer);
  }

  deleteCustomer(customerId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${customerId}`);
  }

}

