import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Client } from '@interfaces/client.interfaces';
import { ClientsService } from '@services/clients.service';
import { SnackbarService } from '@services/snackbar.service';

@Component({
  selector: 'app-dialog-push',
  templateUrl: './dialog-push.component.html',
  styleUrls: ['./dialog-push.component.scss'],
})
export class DialogPushComponent {
  public selectedClients = new FormControl('', Validators.required);

  public selected: number[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Client[],
    private clientService: ClientsService,
    private dialog: MatDialog,
    private snackbarService: SnackbarService
  ) {}

  selChange(event: MatSelectChange): void {
    this.selected = event.value;
  }

  submit(): void {
    this.clientService
      .makePushNotification(this.selected)
      .subscribe((response) => {
        if (!response) return;
        this.dialog.closeAll();
        this.snackbarService.openSuccess();
      });
  }
}
