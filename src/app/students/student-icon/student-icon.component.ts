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
  @Input() studentIndex: number;

  numOfClicks: number[] = [];
  imageClicked = false;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentIndex = this.studentIndex + 1;
  }

  onStudentClick() {
    // const newClick = 1;
    // this.numOfClicks.push(newClick);
    this.imageClicked = true;
  }
}
