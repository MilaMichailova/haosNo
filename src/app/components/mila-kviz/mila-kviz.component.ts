import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';
import { MatDialog } from '@angular/material/dialog';
import {
  MilaCallbackFormComponent,
  getMilaCallbackFormComponentDialogParams,
} from '../mila-callback-form/mila-callback-form.component';

@Component({
  selector: 'mila-kviz',
  standalone: true,
  templateUrl: './mila-kviz.component.html',
  styleUrl: './mila-kviz.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaKvizComponent {
  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog
      .open(
        MilaCallbackFormComponent,
        getMilaCallbackFormComponentDialogParams()
      )
      .afterClosed()
      .subscribe();
  }
}
