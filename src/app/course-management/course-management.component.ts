import { Component } from '@angular/core';

interface Course {
  title: string;
  description: string;
  duration: number;
}

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {
  course: Course = {
    title: '',
    description: '',
    duration: 0
  };

  courses: Course[] = [];

  onSubmit(): void {
    this.courses.push({ ...this.course });
    this.course = { title: '', description: '', duration: 0 };
  }

  deleteCourse(course: Course): void {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}