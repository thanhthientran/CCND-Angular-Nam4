import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-teacher-deltail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  @Input() teacher!: Teacher;
  constructor(){}
  ngOnInit() : void {}

}
