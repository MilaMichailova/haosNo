import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';

@Component({
  selector: 'mila-find-a-specialist',
  standalone: true,
  templateUrl: './mila-find-a-specialist.component.html',
  styleUrl: './mila-find-a-specialist.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaFindASpecialistComponent {}
