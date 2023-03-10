import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '@interfaces/client.interfaces';
import { DialogPushComponent } from '@pages/main/dialog-push/dialog-push.component';
import { ClientsService } from '@services/clients.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | undefined;
  public isLoaded = false;
  public clientList: Client[] = [];
  public dataSource = new MatTableDataSource(this.clientList);
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'pat_name',
    'email',
    'phone',
    'birthday',
    'user_id',
    'sms_verify',
    'visits_all',
    'summ_all',
    'barcode',
    'bonus',
    'date_last',
  ];

  constructor(
    private clientsService: ClientsService,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    if (!this.sort) return;
    this.dataSource.sort = this.sort;
  }

  filterData(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    this.dialog.open(DialogPushComponent, {
      data: this.clientList,
    });
  }

  ngOnInit() {
    this.clientsService.getClientList().subscribe((response) => {
      if (!response) return;
      this.clientList = response.passes;
      this.dataSource.data = this.clientList;
      this.isLoaded = true;
    });
  }
}
