import { TargetLoginComponent } from './../../../../../new-lib/src/share/ui/components/target-login/target-login.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,TargetLoginComponent, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm !: FormGroup
  constructor(
    private forms : FormBuilder
  ){
    this.loginForm = forms.group({
      hotel:[],
      email:[],
      password:[],
    })
  }

}