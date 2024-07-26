import { UploadFileComponent } from './../../../../../new-lib/src/share/ui/components/upload-files/upload-file.component';
import { MultimediaService } from './../../../../../new-lib/src/utils/multimedia.service';
import { MultimediaTableComponent } from './../../../../../new-lib/src/share/ui/components/multimedia-table/multimedia-table.component';
import { CreateFolderComponent } from './../../../../../new-lib/src/share/ui/components/create-folder/create-folder.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {Dialog,DialogModule} from '@angular/cdk/dialog';
import { folder } from '@ctrl/new-lib/types/folder.type';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, MatIcon, DialogModule, MultimediaTableComponent],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss',
})
export class MultimediaComponent implements OnInit{
  newFolder = false
  foldersList: folder[] = []
  constructor(
    private dialog:Dialog,
    private multimediaService: MultimediaService
  ){
  }
  
  ngOnInit(): void {
    this.multimediaService.$multimedia.subscribe(i =>{
      this.foldersList = i
    })
  }

  createFolder(){
    const dialogRef = this.dialog.open<string>(CreateFolderComponent, {
      width: '532px',
      data: { folderName:''},
    });
    dialogRef.closed.subscribe(result => {
      if(result !== undefined){
        this.multimediaService.newFolder({
          folderName: result as string,
          createDate:'',
          numFiles:0,
          updateDate:'',
          images: []
        })

      }
      
      
    });
  }
}