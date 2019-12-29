import { Injectable } from '@angular/core';
import { Observable, throwError, concat } from 'rxjs';
import { environment } from '@env';
import { Nike } from '../schema/nike';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '@shared/service/helper.service';
import { take, catchError, retryWhen, delay, tap } from 'rxjs/operators';

export interface NikeData {
  items: Nike[];
  itemCount: number;
  total: number;
  pageCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class NikeService {
  attempts = 0;
  base_url =
    environment.serverUrl + environment.API_URL + `/nike/sale?gender=Male`;
  constructor(private httpClient: HttpClient, private helper: HelperService) {}

  getAll(): Observable<NikeData> {
    return this.httpClient.get<NikeData>(this.base_url).pipe(
      retryWhen(errors =>
        concat(
          errors.pipe(
            delay(2000),
            tap(() => this.attempts++),
            take(5)
          ),
          throwError(errors)
        )
      ),
      catchError(this.helper.handleError)
    );
  }
}
