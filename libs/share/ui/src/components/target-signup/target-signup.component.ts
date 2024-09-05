import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@copia-chamba/utils';

@Component({
  selector: 'lib-target-signup',
  standalone: true,
  imports: [CommonModule, MatIconModule, InputComponent, ReactiveFormsModule],
  templateUrl: './target-signup.component.html',
  styleUrl: './target-signup.component.scss',
})
export class TargetSignUpComponent {
  loginForm !: FormGroup
  
  constructor(
    private forms : FormBuilder,
    private authService: AuthService
  ){
    this.loginForm = this.forms.group({
      hotel:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(4)]],
    })
  }

  signup(){
    const isValid = this.loginForm.valid;
    const {hotel, email, password} =this.loginForm.getRawValue()
    if (isValid) {
      this.authService.signUp(hotel, email, password)
    }
 
  }
}
