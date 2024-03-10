import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';

@Component({
  selector: 'mila-kviz',
  standalone: true,
  templateUrl: './mila-kviz.component.html',
  styleUrl: './mila-kviz.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaKvizComponent {}
