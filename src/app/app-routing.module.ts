import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTemplateComponent} from './list-template/list-template.component';
import {DocumentEditorComponent} from './document-editor/document-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/templates', pathMatch: 'full' },
  { path: 'templates', component: ListTemplateComponent },
  { path: 'document-editor/:code', component: DocumentEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
