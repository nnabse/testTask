import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessage } from '@enums/snackbarMessage.enums';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  openSuccess(message?: string): void {
    if (!message) message = SnackbarMessage.SUCCESS;
    this.snackbar.open(message, 'Close', { duration: 2000 });
  }
}
