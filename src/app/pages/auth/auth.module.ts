import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '@material/material.module';
import { AuthComponent } from '@pages/auth/auth.component';
import { FormComponent } from '@pages/auth/form/form.component';

@NgModule({
  declarations: [FormComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [AuthComponent, FormComponent],
})
export class AuthModule {}
