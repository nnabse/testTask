import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOKEN } from '@constants/localStorage.constants';
import { AuthFormControl } from '@enums/authFormControl.enums';
import { PageName } from '@enums/pageName.enums';
import { Route } from '@enums/route.enums';
import { Auth } from '@interfaces/auth.interfaces';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {
  @Input() formType: PageName = PageName.SIGN_IN;

  public pageName = PageName;
  public route = Route;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes) {
      const changedProperty = changes[change];
      this.formType = changedProperty.currentValue;
      if (this.formType !== PageName.SIGN_IN) return;
      this.authForm.removeControl(AuthFormControl.PASSWORD_REPEAT);
    }
  }

  public authForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordRepeat: new FormControl('', Validators.required),
  });

  clearPasswordFields(): void {
    this.authForm.get(AuthFormControl.PASSWORD)?.setValue('');
    this.authForm.get(AuthFormControl.PASSWORD_REPEAT)?.setValue('');
  }

  buttonAction(): void {
    const { login, password } = this.authForm.value;
    const data = { login, password };
    this.formType === this.pageName.SIGN_IN
      ? this.signIn(data)
      : this.signUp(data);
    this.clearPasswordFields();
  }

  signIn(data: Auth): void {
    this.authService.signIn(data).subscribe((response) => {
      if (!response) return;
      localStorage.setItem(TOKEN, response.auth_token);
      this.router.navigate([Route.MAIN]);
    });
  }

  signUp(data: Auth): void {
    this.authService.signUp(data).subscribe((response) => {
      if (!response) return;
      localStorage.setItem(TOKEN, response.auth_token);
      this.router.navigate([Route.MAIN]);
    });
  }
}
