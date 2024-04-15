import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { SectionComponentComponent } from './section-component/section-component.component';
import { PageComponentComponent } from './Page-component/page-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponentComponent, SectionComponentComponent, PageComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppComponents';
  // navigate() {
  //   this.router.navigate(['/component-two']);
  // }
}
