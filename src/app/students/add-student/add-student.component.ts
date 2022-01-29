import { Student } from './../../shared/student.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/app/shared/students.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  selectedFile: File = null;
  message: string;
  success = false;
  errorHappened = false;

  constructor(
    private studentsService: StudentsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onFormSubmit(f: NgForm) {
    const newStudent = new Student(f.value.name, f.value.image);

    if (f.invalid) {
      return;
    }

    this.studentsService.saveStudet(newStudent).subscribe(
      (res) => {
        console.log(res);
        this.message = 'Saved successfully!';
        this.success = true;
        setTimeout(() => {
          this.message = undefined;
          this.success = false;
        }, 2000);
      },
      (error) => {
        this.message = 'Error happened! try again later!';
        this.errorHappened = true;
        setTimeout(() => {
          this.message = undefined;
          this.errorHappened = false;
        }, 2000);
      }
    );
    console.log(f);
    // f.reset();
  }

  // onFileSelected(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  // }

  // onUpload() {
  //   // Create form data
  //   const formData = new FormData();

  //   // Store form name as "file" with file data
  //   formData.append('file', this.selectedFile, this.selectedFile.name);
  //   this.http
  //     .post('https://file.io', { file: formData, autoDelete: false })
  //     .subscribe((res: any) => {
  //       console.log(res.link);
  //     });
  // }
}
