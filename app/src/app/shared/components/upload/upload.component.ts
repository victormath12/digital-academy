import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'campus-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @ViewChild("uploadModal") uploadModal: ClrWizard;

  @Input() open: boolean = true;

  constructor() { }

  ngOnInit() { }

}
