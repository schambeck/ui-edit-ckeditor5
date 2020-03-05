import {Component, OnInit} from '@angular/core';
import {Template, TemplateService} from '../common/template.service';
import {Observable, Subject} from 'rxjs';
import {indicate} from '../common/operators.service';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {

  loading = new Subject<boolean>();
  templates$: Observable<Template[]>;

  constructor(private templateService: TemplateService) {
  }

  ngOnInit(): void {
    setTimeout(() => this.getTemplates());
  }

  getTemplates(): void {
    this.templates$ = this.templateService.getTemplates()
      .pipe(indicate(this.loading));
  }

}
