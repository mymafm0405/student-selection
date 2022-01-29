import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [
    new Student(
      'Mahmoud Yhya',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Asmaa Fouad',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Retaj Mahmoud',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Adam Mahmoud',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Mahmoud Yhya',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Asmaa Fouad',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Retaj Mahmoud',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Adam Mahmoud',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Mahmoud Yhya',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Asmaa Fouad',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Retaj Mahmoud',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
    ),
    new Student(
      'Adam Mahmoud',
      'https://cdn.iconscout.com/icon/free/png-256/graduating-student-2465650-2042096.png'
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
