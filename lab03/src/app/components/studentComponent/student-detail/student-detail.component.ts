import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-deltail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student!: Student;
  constructor(){}
  ngOnInit() : void {}

}
