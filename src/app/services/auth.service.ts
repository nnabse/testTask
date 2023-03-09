import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLink } from '@enums/apiLink.enums';
import { environment } from '@environments/environment';
import { Auth, ServerResponse } from '@interfaces/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public signIn(body: Auth): Observable<ServerResponse> {
    return this.httpClient.post<ServerResponse>(
      `${environment.SERVER_URL}${ApiLink.AUTH}`,
      body
    );
  }

  public signUp(body: Auth): Observable<ServerResponse> {
    return this.httpClient.post<ServerResponse>(
      `${environment.SERVER_URL}${ApiLink.AUTH}`,
      body
    );
  }
}
