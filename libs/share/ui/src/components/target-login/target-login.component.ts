import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@copia-chamba/utils';
import { InputComponent } from '../input/input.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-target-login',
  standalone: true,
  imports: [CommonModule, InputComponent, MatIcon,ReactiveFormsModule],
  templateUrl: './target-login.component.html',
  styleUrl: './target-login.component.scss',
})
export class TargetLoginComponent {
  loginForm !: FormGroup
  router = inject(Router)
  constructor(
    private forms : FormBuilder,
    private authService: AuthService
  ){
    this.loginForm = this.forms.group({
      email:['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(4)]],
    })
  }

  login(){
    const isValid = this.loginForm.valid;
    const {email, password} =this.loginForm.getRawValue()
    if (isValid) {
      this.authService.logIn( email, password)
    }
 
  }

  link(){
    this.router.navigate(['signup'])
  }
}
