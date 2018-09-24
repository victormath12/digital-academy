import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'campus-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ViewChild("playerModal") playerModal: ClrWizard;

  @Input() open: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
