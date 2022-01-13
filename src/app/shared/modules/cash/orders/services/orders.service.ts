import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetOrdersResponseInterface } from '../types/getOrdersResponse.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdersService {
    constructor(private http: HttpClient) {}

    getOrders(url: string): Observable<GetOrdersResponseInterface> {
        const fullUrl = environment.apiUrl + url;
        return this.http.get<GetOrdersResponseInterface>(fullUrl);
    }
}
