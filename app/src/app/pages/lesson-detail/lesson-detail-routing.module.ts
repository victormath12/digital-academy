import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonDetailComponent } from './lesson-detail.component';

const routes: Routes = [
  {path: '', component: LessonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonDetailRoutingModule { }
