import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
    'folder',
    'chevron',
    'menu',
    'notification',
    'ctlrlogo'
  ]
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,

  ){
    this.iconsToRegister.forEach(icon => {      
  
      matIconRegistry.addSvgIcon(icon,domSanitizer.bypassSecurityTrustResourceUrl(`assets/icon/${icon}.svg`));

    })
  }
}
