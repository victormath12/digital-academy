import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CourseDetailRoutingModule,
    SharedModule
  ],
  declarations: [CourseDetailComponent]
})
export class CourseDetailModule { }
