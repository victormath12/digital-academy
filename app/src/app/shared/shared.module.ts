import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { HeaderComponent } from './webparts/header/header.component';
import { JumbotronComponent } from './webparts/jumbotron/jumbotron.component';
import { PageTitleComponent } from './webparts/page-title/page-title.component';
import { StarsComponent } from './components/stars/stars.component';
import { UploadComponent } from './components/upload/upload.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule
  ],
  declarations: [
    HeaderComponent,
    JumbotronComponent,
    PageTitleComponent,
    StarsComponent,
    UploadComponent,
    PlayerComponent
  ],
  providers: [],
  exports: [
    RouterModule,
    ClarityModule,

    HeaderComponent,
    JumbotronComponent,
    PageTitleComponent,
    StarsComponent,
    UploadComponent,
    PlayerComponent
  ]
})
export class SharedModule { }
