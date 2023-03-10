import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLink } from '@enums/apiLink.enums';
import { environment } from '@environments/environment';
import {
  GetClientListResponse,
  PushRequestResponse,
} from '@interfaces/client.interfaces';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private token = this.authService.getToken();
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getClientList(): Observable<GetClientListResponse> {
    return this.httpClient.get<GetClientListResponse>(
      `${environment.SERVER_URL}/v1/${this.token}${ApiLink.PASSES}`
    );
  }

  public makePushNotification(
    list: number[],
    message?: string
  ): Observable<PushRequestResponse> {
    const idList = list.join(', ');
    if (!message) message = 'test push message';
    return this.httpClient.post<PushRequestResponse>(
      `${environment.SERVER_URL}/v1/${this.token}${ApiLink.MESSAGE_PUSH}`,
      {
        user_id: idList,
        push_message: message,
      }
    );
  }
}
