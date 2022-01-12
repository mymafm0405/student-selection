import { Student } from './../../shared/student.model';
import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-student-icon',
  templateUrl: './student-icon.component.html',
  styleUrls: ['./student-icon.component.css'],
})
export class StudentIconComponent implements OnInit {
  @Input() student: Student;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}
}
