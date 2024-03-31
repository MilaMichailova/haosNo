import { Component } from '@angular/core';
import { MilaButtonComponent } from '../mila-button/mila-button.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import {
  MilaCallbackFormComponent,
  getMilaCallbackFormComponentDialogParams,
} from '../mila-callback-form/mila-callback-form.component';

@Component({
  selector: 'mila-vebinars',
  standalone: true,
  templateUrl: './mila-vebinars.component.html',
  styleUrl: './mila-vebinars.component.scss',
  imports: [MilaButtonComponent, MatExpansionModule],
})
export class MilaVebinarsComponent {
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
