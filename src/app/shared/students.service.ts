import { Student } from './student.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [
    new Student(
      'Mahmoud Yhya',
      'https://i.dlpng.com/static/png/6584089_preview.png'
    ),
    new Student(
      'Asmaa Fouad',
      'https://i.dlpng.com/static/png/6584089_preview.png'
    ),
    new Student(
      'Retaj Mahmoud',
      'https://i.dlpng.com/static/png/6584089_preview.png'
    ),
    new Student(
      'Adam Mahmoud',
      'https://i.dlpng.com/static/png/6584089_preview.png'
    ),
  ];

  saveStudet(newStudent: Student) {
    console.log(newStudent);
  }

  getStudents() {
    return this.students;
  }
}
