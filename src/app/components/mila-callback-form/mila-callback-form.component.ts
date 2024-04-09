import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Injectable } from '@angular/core';
import { UserRepository } from '../../storage/repository/user-repository';
import { v4 as uuid } from 'uuid';
import { IStorageUser } from '../../storage/models/storage-user';
import { MatButtonModule } from '@angular/material/button';
import { MilaButtonComponent } from '../mila-button/mila-button.component';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MilaSuccessfulSubmissionForm,
  getMilaSuccessfulSubmissionFormComponentDialogParams,
} from '../mila-successful-submission-form/mila-successful-submission-form.component';

export function getMilaCallbackFormComponentDialogParams() {
  return {
    height: '700px',
    width: '960px',
    margin: '0 auto',
  };
}

@Component({
  selector: 'mila-callback-form',
  standalone: true,
  templateUrl: './mila-callback-form.component.html',
  styleUrl: './mila-callback-form.component.scss',
  imports: [MatButtonModule, MilaButtonComponent, ReactiveFormsModule],
})
export class MilaCallbackFormComponent {
  constructor(
    public dialogRef: MatDialogRef<MilaCallbackFormComponent>,
    private userRepository: UserRepository,
    public dialog: MatDialog
  ) {}

  private readonly userName = new FormControl('', Validators.required);
  private readonly userPhone = new FormControl('', [
    Validators.pattern('[0-9]{11}'),
    Validators.required,
  ]);

  milaCallbackForm: FormGroup = new FormGroup({
    userName: this.userName,
    userPhone: this.userPhone,
    checkboxPrivacyPolicy: new FormControl('', Validators.requiredTrue),
    checkboxAdvertising: new FormControl(''),
    checkboxContractOffer: new FormControl('', Validators.requiredTrue),
  });

  public saveUser(): void {
    // const user = this.createNewUser();
    const user = {
      id: uuid(),
      name: this.userName.value!,
      phone: this.userPhone.value!,
    } as IStorageUser;
    this.userRepository.saveClient(user);
    this.closeDialog();
    this.successfulSubmission();
  }

  public openDialogSucsuccessful(): void {
    this.dialog
      .open(
        MilaSuccessfulSubmissionForm,
        getMilaSuccessfulSubmissionFormComponentDialogParams()
      )
      .afterClosed()
      .subscribe();
  }
  successfulSubmission() {
    console.log('Форма отправлена успешно!');
    this.openDialogSucsuccessful();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
