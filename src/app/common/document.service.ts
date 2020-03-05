import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() {
  }

  create(code: string): Observable<Document> {
    return of({code}).pipe(delay(1000));
  }

}

export interface Document {
  code: string;
}
