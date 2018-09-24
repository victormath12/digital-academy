import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'campus-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input('label') label;

  constructor() { }

  ngOnInit() { }

}
