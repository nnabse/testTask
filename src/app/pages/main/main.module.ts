import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
import { MainComponent } from '@pages/main/main.component';

import { DialogPushComponent } from './dialog-push/dialog-push.component';

@NgModule({
  declarations: [MainComponent, DialogPushComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class MainModule {}
