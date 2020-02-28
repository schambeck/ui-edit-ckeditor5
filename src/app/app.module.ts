import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListTemplateComponent } from './list-template/list-template.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTemplateComponent,
    DocumentEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
