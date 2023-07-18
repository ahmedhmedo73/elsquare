import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieDBInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzgzYTA0ZGI3YmY4YjM1NTU5ZDA2MGE5ODVhZmUwZiIsInN1YiI6IjYxNmRlMjg4M2Q0ZDk2MDA0MzMwODllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pt6N2sxMfAy_qJAuFc5ukEP_5jJyTGYrO_fcsrj6V3U'
      ),
    });

    return next.handle(request);
  }
}
