import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';
import { MatDialog } from '@angular/material/dialog';
import {
  MilaCallbackFormComponent,
  getMilaCallbackFormComponentDialogParams,
} from '../mila-callback-form/mila-callback-form.component';

@Component({
  selector: 'mila-courses',
  standalone: true,
  templateUrl: './mila-courses.component.html',
  styleUrl: './mila-courses.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaCoursesComponent {
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
