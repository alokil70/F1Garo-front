import { IUser, IUserAuth } from './../../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    getUser(response: any): any {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return response.user;
    }

    /*     createUser(data: RegisterRequestInterface): Observable<CurrentUserCashInterface> {
        const url = environment.apiUrl + '/cash/reg';
        return this.http.post<AuthCashResponseInterface>(url, data).pipe(map(this.getUser));
    } */

    login(data: IUserAuth): Observable<IUser> {
        const url = environment.apiUrl + '/cash/login';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.http.post(url, data).pipe(map(this.getUser));
    }

/*     getCurrentUser(): Observable<CurrentUserCashInterface> {
        const url = environment.apiUrl + '/user';
        return this.http.get(url).pipe(map(this.getUser));
    } */

    logout(token: string | null) {
        throw new Error('Method not implemented.');
    }
}
