import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'campus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() { }

}
