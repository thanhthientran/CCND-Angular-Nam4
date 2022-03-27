import { Component, OnInit, Output } from '@angular/core';
import {Student} from '../../models/student.model'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //database of student
  students: Student[]=[
    new Student(10001,'thanh'),
    new Student(10002,'bao'),
    new Student(10003,'thao'),
    new Student(10004,'tu')
  ];



  constructor(){}
  ngOnInit() : void {}

}
