import { CreateFolderComponent } from './../../../../../new-lib/src/share/ui/components/create-folder/create-folder.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {Dialog,DialogModule} from '@angular/cdk/dialog';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, MatIcon, DialogModule],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss',
})
export class MultimediaComponent {
  constructor(private dialog:Dialog){}
  newFolder = false
  folderName =''
  foldersList: string[] = []
  createFolder(){
    const dialogRef = this.dialog.open<string>(CreateFolderComponent, {
      width: '532px',
      data: { folderName: this.folderName},
    });
    dialogRef.closed.subscribe(result => {
      this.folderName = result as string;
      console.log(this.folderName);
    });
  }
}
