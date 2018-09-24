import { LessonDetailModule } from './lesson-detail.module';

describe('LessonDetailModule', () => {
  let lessonDetailModule: LessonDetailModule;

  beforeEach(() => {
    lessonDetailModule = new LessonDetailModule();
  });

  it('should create an instance', () => {
    expect(lessonDetailModule).toBeTruthy();
  });
});
