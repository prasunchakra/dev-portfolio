import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepComponent } from './step.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    StepComponent,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
})
export class AppComponent {
  title = 'koham';
}
