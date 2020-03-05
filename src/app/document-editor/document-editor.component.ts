import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {indicate} from '../common/operators';
import {Observable, Subject} from 'rxjs';
import {Document, DocumentService} from '../common/document.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  code: string;
  document$: Observable<Document>;
  creating = new Subject<boolean>();

  public Editor = DecoupledEditor;
  public model = {
    editorData: '<p>Hello, world!!!!</p>'
  };

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

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

  showModel() {
    console.log(this.model.editorData);
  }
}
