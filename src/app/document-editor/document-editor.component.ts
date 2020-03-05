import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {indicate} from '../common/operators.service';
import {Observable, Subject} from 'rxjs';
import {Document, DocumentService} from '../common/document.service';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  code: string;
  document$: Observable<Document>;
  creating = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    setTimeout(() => this.create());
  }

  create(): void {
    this.document$ = this.documentService.create(this.code)
      .pipe(indicate(this.creating));
  }

}
