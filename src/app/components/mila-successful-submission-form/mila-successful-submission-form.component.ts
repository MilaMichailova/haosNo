import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export function getMilaSuccessfulSubmissionFormComponentDialogParams() {
  return {
    height: '500px',
    width: '500px',
    margin: '0 auto',
  };
}

@Component({
  selector: 'mila-successful-submission-form',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './mila-successful-submission-form.component.html',
  styleUrl: './mila-successful-submission-form.component.scss',
})
export class MilaSuccessfulSubmissionForm {
  constructor(
    public dialogRef: MatDialogRef<MilaSuccessfulSubmissionForm>,
    public dialog: MatDialog
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
