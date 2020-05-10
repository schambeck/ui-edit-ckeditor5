import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {indicate} from '../common/operators';
import {Observable, Subject} from 'rxjs';
import {Document, DocumentService} from '../common/document.service';
import * as Editor from '../ckeditor5-build-article/build/ckeditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  code: string;
  document$: Observable<Document>;
  creating = new Subject<boolean>();
  editorConfig = {
    // toolbar: [ 'bold', 'italic', 'InsertImage' ],
    // plugins: [ Bold, Italic, InsertImage ]
  };

  public Editor = Editor;
  public model = {
    editorData: '<p>This is an article:</p>\n' +
      '<section class="article">\n' +
      '    <h1 class="article-title">Article Title</h1>\n' +
      '    <div class="article-description">\n' +
      '        <p>The description goes here.</p>\n' +
      '            <ul>\n' +
      '                <li>It can contain lists,</li>\n' +
      '                <li>and other block elements like headings.</li>\n' +
      '            </ul>\n' +
      '    </div>\n' +
      '</section>' +
      '<figure class="image">\n' +
      '    <img src="https://via.placeholder.com/1000x300/02c7cd/fff?text=Placeholder%20image" alt="CKEditor 5 rocks!">\n' +
      '</figure>'
  };

  public onReady( editor ) {
    CKEditorInspector.attach(editor);
    document.querySelector( '.document-editor__toolbar' ).appendChild( editor.ui.view.toolbar.element );
  }

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    setTimeout(() => this.create());
    // Editor.builtinPlugins.map( plugin => console.log(plugin.pluginName) );
  }

  create(): void {
    this.document$ = this.documentService.create(this.code)
      .pipe(indicate(this.creating));
  }

  showModel() {
    console.log(this.model.editorData);
  }

}
