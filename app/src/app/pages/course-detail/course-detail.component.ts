import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'campus-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  playerModalOpen: boolean = false;

  constructor() { }

  ngOnInit() { }

  onStartLessonClick() {
    this.playerModalOpen = !this.playerModalOpen;
  }

}
