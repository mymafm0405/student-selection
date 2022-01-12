import { Student } from './../../shared/student.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}

  onFormSubmit(f: NgForm) {
    const newStudent = new Student(f.value.name, f.value.image);

    if (f.invalid) {
      return;
    }
    this.studentsService.saveStudet(newStudent);
    f.reset();
  }
}
