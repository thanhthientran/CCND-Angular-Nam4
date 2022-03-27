import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './components/studentComponent/student-detail/student-detail.component';
import { StudentComponent } from './components/studentComponent/student.component';
import { TeacherDetailComponent } from './components/teacherComponent/teacher-detail/teacher-detail.component';
import { TeacherComponent } from './components/teacherComponent/teacher.component';
import { StudentHighlight } from './directives/StudentHighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    StudentDetailComponent,
    TeacherDetailComponent,
    StudentHighlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
