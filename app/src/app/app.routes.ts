import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cursos',
    loadChildren: 'src/app/pages/courses/courses.module#CoursesModule'
  },
  {
    path: 'curso-detalhe',
    loadChildren: 'src/app/pages/course-detail/course-detail.module#CourseDetailModule'
  },
  {
    path: 'aula-detalhe',
    loadChildren: 'src/app/pages/lesson-detail/lesson-detail.module#LessonDetailModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }