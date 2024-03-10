import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';

@Component({
  selector: 'mila-faq',
  standalone: true,
  templateUrl: './mila-faq.component.html',
  styleUrl: './mila-faq.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaFaqComponent {}
