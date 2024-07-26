import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from '@ctrl/new-lib/share/ui/components/upload-files/upload-file.component';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule, UploadFileComponent],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
})
export class FolderComponent {

}
