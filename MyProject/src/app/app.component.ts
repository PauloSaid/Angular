import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./Navigation/menu/menu.component";
import { HomeComponent } from "./Navigation/home/home.component";
import { FooterComponent } from "./Navigation/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: [],
    imports: [RouterOutlet, MenuComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'MyProject';
}
