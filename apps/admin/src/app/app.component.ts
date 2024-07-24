import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { registerIcons } from '@copia-chamba/new-lib';

@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';
  loaded = false
  iconsToRegister = [
    'folder'
  ]
  constructor(){
    registerIcons(
      this.iconsToRegister.map((icon) => ({
        name: icon,
        url: `/apps/admin/assets/${icon}.svg`,
      })),
    ).then(() => {
      this.loaded = true;
    });
  }
}
