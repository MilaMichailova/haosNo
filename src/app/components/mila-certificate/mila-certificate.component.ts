import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';

@Component({
  selector: 'mila-certificate',
  standalone: true,
  templateUrl: './mila-certificate.component.html',
  styleUrl: './mila-certificate.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaCertificateComponent {}
