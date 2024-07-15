import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,],
  templateUrl: './app.component.html',
})
export class AppComponent {}
