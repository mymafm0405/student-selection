import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
    new Student(
      '',
      ''
    ),
  ];

  constructor(private http: HttpClient) {}

  saveStudet(newStudent: Student) {
    console.log(newStudent);
    return this.http.post(
      'https://students-selection-eec3e-default-rtdb.firebaseio.com/students.json',
      newStudent
    );
  }

  getStudents() {
    return this.students;
  }
}
