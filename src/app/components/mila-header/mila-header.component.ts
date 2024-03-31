import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mila-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './mila-header.component.html',
  styleUrl: './mila-header.component.scss',
})
export class MilaHeaderComponent {}
