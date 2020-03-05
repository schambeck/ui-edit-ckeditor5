import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListTemplateComponent } from './list-template/list-template.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {FormsModule} from "@angular/forms";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

@NgModule({
  declarations: [
    AppComponent,
    ListTemplateComponent,
    DocumentEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    FormsModule,
    // CKEditorInspector
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
