import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  loadedFeature = 'recipe';

  //xác định feature (recipe / shopping-list) đang được chọn
  onNavigate(feature: string) {
    this.loadedFeature = feature;
}
}
