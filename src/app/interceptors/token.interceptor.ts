import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_TOKEN } from '@constants/auth.constants';
import { AUTHORIZATION } from '@constants/headers.constants';
import { TOKEN } from '@constants/localStorage.constants';
import { ApiLink } from '@enums/apiLink.enums';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(TOKEN);
    if (request.url === `${environment.SERVER_URL}${ApiLink.AUTH}` || !token)
      return next.handle(request);

    const cloneReq = request.clone({
      headers: request.headers.set(AUTHORIZATION, token),
    });
    return next.handle(cloneReq);
  }
}
