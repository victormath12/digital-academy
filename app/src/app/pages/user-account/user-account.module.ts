import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountComponent } from './user-account.component';

@NgModule({
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    SharedModule
  ],
  declarations: [UserAccountComponent]
})
export class UserAccountModule { }
