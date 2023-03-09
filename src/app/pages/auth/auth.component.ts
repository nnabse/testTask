import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageName } from '@enums/pageName.enums';
import { Route } from '@enums/route.enums';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  public currentRoute: PageName = PageName.SIGN_IN;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === Route.SIGN_IN) this.currentRoute = PageName.SIGN_IN;
    if (this.router.url === Route.SIGN_UP) this.currentRoute = PageName.SIGN_UP;
  }
}
