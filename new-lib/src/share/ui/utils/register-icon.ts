import { inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { IconRegistry } from '../models';

export const registerIcons = async (icons: IconRegistry[]) => {
  const matIconRegistry = inject(MatIconRegistry);
  const domSanitizer = inject(DomSanitizer);

  for (const icon of icons) {
    matIconRegistry.addSvgIcon(icon.name, domSanitizer.bypassSecurityTrustResourceUrl(icon.url));
  }
};
