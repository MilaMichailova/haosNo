import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';
import { MatDialog } from '@angular/material/dialog';
import {
  MilaCallbackFormComponent,
  getMilaCallbackFormComponentDialogParams,
} from '../mila-callback-form/mila-callback-form.component';

@Component({
  selector: 'mila-faq',
  standalone: true,
  templateUrl: './mila-faq.component.html',
  styleUrl: './mila-faq.component.scss',
  imports: [MilaButtonComponent],
})
export class MilaFaqComponent {
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
