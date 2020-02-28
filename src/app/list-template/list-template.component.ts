import { Component, OnInit } from '@angular/core';

interface Template {
  code: string;
  type: string,
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

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {

  templates = TEMPLATES;

  constructor() { }

  ngOnInit(): void {
  }

}
