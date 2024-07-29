import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-target-login',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './target-login.component.html',
  styleUrl: './target-login.component.scss',
})
export class TargetLoginComponent {}
