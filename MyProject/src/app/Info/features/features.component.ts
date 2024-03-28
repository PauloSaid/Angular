import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: 'features.component.html'
})
export class FeaturesComponent {
  public clicks : number = 0;

  AddClick(){
    this.clicks++;
  }

  ResetCounter(){
    this.clicks = 0;
  }
}
