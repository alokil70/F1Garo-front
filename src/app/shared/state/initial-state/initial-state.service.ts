import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { InitialStateResponseInterface } from './initial-state-response.interface';

@Injectable()
export class InitialStateService {
    constructor(private http: HttpClient) {}

    getInitialState(url: string): Observable<InitialStateResponseInterface> {
        const fullUrl = environment.apiUrl + url;
        return this.http.get<InitialStateResponseInterface>(fullUrl);
    }
}
