import { Component } from '@angular/core';
import { PasswordStrength } from '../types';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: PasswordStrength = 'empty';

  calculatePasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = 'empty';
      return;
    }
    if (this.password.length < 8) {
      this.passwordStrength = 'short';
      return;
    }

    const digits = this.password.match(/[0-9]/);
    const letters = this.password.match(/[a-zA-Z]/);
    const symbols = this.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);

    const matches = [digits, letters, symbols].filter(Boolean).length;
    if (matches === 1) {
      this.passwordStrength = 'easy';
      return;
    }
    if (matches === 2) {
      this.passwordStrength = 'medium';
      return;
    }
    this.passwordStrength = 'strong';
  }
}
