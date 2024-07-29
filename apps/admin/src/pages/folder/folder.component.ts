import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from '@copia-chamba/ui';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule, UploadFileComponent],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
})
export class FolderComponent {

}
