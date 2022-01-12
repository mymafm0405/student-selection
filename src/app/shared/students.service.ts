import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  openModalSub = new Subject<boolean>();

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
  ];

  saveStudet(newStudent: Student) {
    console.log(newStudent);
  }

  getStudents() {
    return this.students;
  }

  openModal() {
    this.openModalSub.next(true);
  }
}
