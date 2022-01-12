import { Student } from './shared/student.model';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showAddForm = false;
  students: Student[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

  onAddClick() {
    this.showAddForm = !this.showAddForm;
  }
}
