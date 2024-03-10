import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';

@Component({
  selector: 'mila-courses',
  standalone: true,
  templateUrl: './mila-courses.component.html',
  styleUrl: './mila-courses.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaCoursesComponent {}
