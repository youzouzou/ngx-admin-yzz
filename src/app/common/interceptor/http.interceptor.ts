import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {globalService} from "../service/global.service";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  constructor(public global:globalService) {
  }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    let vm = this;
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => {
            this.global.loadStatus = true;
            console.log('loading');
          },
          // Operation failed; error is an HttpErrorResponse
          error => {
            console.log('error');
            this.global.loadStatus = false;
          }
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          console.log('end loading');
          vm.global.loadStatus = false;
        })
      );
  }
}
