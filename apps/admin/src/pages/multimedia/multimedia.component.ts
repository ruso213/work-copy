import {MultimediaTableComponent, CreateFolderComponent, folder} from '@copia-chamba/ui'
import { MultimediaService } from '@copia-chamba/utils';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {Dialog,DialogModule} from '@angular/cdk/dialog';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, MatIcon, DialogModule, MultimediaTableComponent],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss',
})
export class MultimediaComponent{
  newFolder = false
  foldersList: folder[] = []
  constructor(
    private dialog:Dialog,
    private multimediaService: MultimediaService
  ){
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
          images: [],
          idUser:''
        })

      }
      
      
    });
  }
}