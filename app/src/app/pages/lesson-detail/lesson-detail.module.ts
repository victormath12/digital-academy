import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { LessonDetailRoutingModule } from './lesson-detail-routing.module';
import { LessonDetailComponent } from './lesson-detail.component';

@NgModule({
  imports: [
    CommonModule,
    LessonDetailRoutingModule,
    SharedModule
  ],
  declarations: [LessonDetailComponent]
})
export class LessonDetailModule { }
