import { BgTargetsComponent, TargetLoginComponent } from '@copia-chamba/ui';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule, TargetLoginComponent, BgTargetsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
