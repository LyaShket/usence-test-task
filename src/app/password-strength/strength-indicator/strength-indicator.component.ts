import { Component, Input } from '@angular/core';
import { PasswordStrength } from '../../types';

@Component({
  selector: 'app-strength-indicator',
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./strength-indicator.component.css']
})
export class StrengthIndicatorComponent {
  @Input() strength: PasswordStrength = 'empty';
}
