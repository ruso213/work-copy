import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TargetSignUpComponent } from '@copia-chamba/ui';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, TargetSignUpComponent, MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignUpComponent {
}
