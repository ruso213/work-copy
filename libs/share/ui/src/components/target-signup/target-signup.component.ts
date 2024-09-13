import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@copia-chamba/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-target-signup',
  standalone: true,
  imports: [CommonModule, MatIconModule, InputComponent, ReactiveFormsModule],
  templateUrl: './target-signup.component.html',
  styleUrl: './target-signup.component.scss',
})
export class TargetSignUpComponent {
  signupform !: FormGroup
  router = inject(Router)
  constructor(
    private forms : FormBuilder,
    private authService: AuthService
  ){
    this.signupform = this.forms.group({
      hotel:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(4)]],
    })
  }

  signup(){
    const isValid = this.signupform.valid;
    const {hotel, email, password} =this.signupform.getRawValue()
    if (isValid) {
      this.authService.signUp(hotel, email, password)
    }
  }

  link(){
    this.router.navigate(['login'])
  }
}
