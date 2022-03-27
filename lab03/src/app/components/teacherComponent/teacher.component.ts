import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../models/teacher.model'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  //database of teacher
  teachers: Teacher[]=[
    new Teacher(20001,'thanhGV'),
    new Teacher(20002,'baoGV'),
    new Teacher(20003,'thaoGV'),
    new Teacher(20004,'tuGV')
  ]


  constructor(){}
  ngOnInit() : void {}

}
