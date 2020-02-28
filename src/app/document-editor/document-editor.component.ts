import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  code: string;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
  }

}
