import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-bg-targets',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './bg-targets.component.html',
  styleUrl: './bg-targets.component.scss',
})
export class BgTargetsComponent {}
