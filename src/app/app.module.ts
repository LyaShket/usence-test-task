import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { FormsModule } from '@angular/forms';
import { StrengthIndicatorComponent } from './password-strength/strength-indicator/strength-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    StrengthIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
