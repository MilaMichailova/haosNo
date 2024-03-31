import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';
import { MatDialog } from '@angular/material/dialog';
import {
  MilaCallbackFormComponent,
  getMilaCallbackFormComponentDialogParams,
} from '../mila-callback-form/mila-callback-form.component';

@Component({
  selector: 'mila-find-a-specialist',
  standalone: true,
  templateUrl: './mila-find-a-specialist.component.html',
  styleUrl: './mila-find-a-specialist.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaFindASpecialistComponent {
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
