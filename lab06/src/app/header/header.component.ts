import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //biến featureSelected qua @Output sẽ đẩy giá trị lên cho component cha (app.component)
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  //bắt giá trị feature từ onSelect và đẩy vào biến featureSelected
  // onSelect(featrue: string){
  //   this.featureSelected.emit(featrue);
  // }

}
