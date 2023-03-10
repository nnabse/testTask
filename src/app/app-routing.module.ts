import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';
import { AuthComponent } from '@pages/auth/auth.component';
import { MainComponent } from '@pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'signIn', component: AuthComponent },
  { path: 'signUp', component: AuthComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
