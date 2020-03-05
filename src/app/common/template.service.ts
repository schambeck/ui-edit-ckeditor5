import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  getTemplates(): Observable<Template[]> {
    return of(TEMPLATES).pipe(delay(1000));
  }

}

export interface Template {
  code: string;
  type: string;
  name: string;
}

const TEMPLATES: Template[] = [
  {
    code: 'SJ-023',
    type: 'Proposal for a regulation',
    name: 'Proposal for a Regulation of the European Parliament and of the Council',
  },
  {
    code: 'SJ-024',
    type: 'Proposal for a directive',
    name: 'Proposal for a Directive of the European Parliament and of the Council',
  },
  {
    code: 'SJ-025',
    type: 'Proposal for a decision',
    name: 'Proposal for a Decision of the European Parliament and of the Council',
  },
  {
    code: 'SJ-026',
    type: 'Proposal for a decision',
    name: 'Proposal for a Decision of the European Parliament and of the Council (without addressees)',
  }
];
