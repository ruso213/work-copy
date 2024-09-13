import {MultimediaTableComponent, CreateFolderComponent,folder} from '@copia-chamba/ui'
import { AuthService, MultimediaService } from '@copia-chamba/utils';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {Dialog,DialogModule} from '@angular/cdk/dialog';
import { DocumentData } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, MatIcon, DialogModule, MultimediaTableComponent],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss',
})
export class MultimediaComponent implements OnInit{
  router = inject(Router)
  newFolder = false
  foldersList: DocumentData[] = []
  authservice = inject(AuthService)
  loading : "loading" | "load"= "loading"
  columns = ['name', 'updateDate', 'numFiles']
  constructor(
    private dialog:Dialog,
    private multimediaService: MultimediaService
  ){}
  ngOnInit(): void {
    this.multimediaService.getfolders().then(()=>{
      this.foldersList = this.multimediaService.getMultimediaFolders
      this.loading = "load"      
    })
    
  }

  createFolder(){
    const dialogRef = this.dialog.open<string>(CreateFolderComponent, {
      width: '532px',
      data: { folderName:''},
    });
    dialogRef.closed.subscribe(result => {
      if(result !== undefined){
        this.multimediaService.addFolder(result)
      }
    });
  }

  openFolder(evt: folder){
    this.router.navigate(
      ["home/folder"],
      { queryParams: { order: evt.folderId } 
    }
    )
  }

  logout(){
    this.authservice.logout()
  }
}