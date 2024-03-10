import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'mila-vebinars',
  standalone: true,
  templateUrl: './mila-vebinars.component.html',
  styleUrl: './mila-vebinars.component.scss',
  imports: [MilaButtonComponent, MatExpansionModule],
})
export class MilaVebinarsComponent {}
