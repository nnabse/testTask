import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from '@guards/auth.guard';

import { AuthModule } from '@pages/auth/auth.module';
import { MainModule } from '@pages/main/main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, MainModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
