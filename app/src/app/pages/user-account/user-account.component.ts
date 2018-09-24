import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'campus-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  uploadModalOpen:boolean = false;

  constructor() { }

  ngOnInit() { }

  onUploadButtonClick() {
    this.uploadModalOpen = !this.uploadModalOpen;
  }

}
