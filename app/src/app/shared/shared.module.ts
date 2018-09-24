import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';

import { HeaderComponent } from './webparts/header/header.component';
import { JumbotronComponent } from './webparts/jumbotron/jumbotron.component';
import { PageTitleComponent } from './webparts/page-title/page-title.component';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [
    HeaderComponent,
    JumbotronComponent,
    PageTitleComponent,
    StarsComponent
  ],
  providers: [],
  exports: [
    ClarityModule,

    HeaderComponent,
    JumbotronComponent,
    PageTitleComponent,
    StarsComponent
  ]
})
export class SharedModule { }
