import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponentComponent } from './button-component/button-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppComponents';
}
