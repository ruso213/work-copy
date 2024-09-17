import {MultimediaTableComponent, CreateFolderComponent,folder} from '@copia-chamba/ui'
import { AuthService, MultimediaService } from '@copia-chamba/utils';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {Dialog,DialogModule} from '@angular/cdk/dialog';
import { DocumentData } from 'firebase/firestore';
import { Router } from '@angular/router';
import { collection, Firestore, onSnapshot, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, MatIcon, DialogModule, MultimediaTableComponent],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss',
})
export class MultimediaComponent implements OnInit{
  auth = inject(Auth)
  dialog = inject(Dialog)
  router = inject(Router)
  multimediaService = inject(MultimediaService)
  db = inject(Firestore)
  newFolder = false
  foldersList: folder[] = []
  loading : "loading" | "load"= "loading"
  columns = ['name', 'updateDate',"size"]
  

  ngOnInit(): void {
    const collectionRef = collection(this.db,'folder')
    const q = query(collectionRef, where("idUser", "==", this.auth.currentUser?.uid)) 
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      
      const folders :folder[]= [];
      querySnapshot.forEach((doc) => {
        folders.push(  {
          ...doc.data() as folder,
          folderId: doc.id,
        })        
      });
      this.foldersList = folders
      this.loading = "load"
    });
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
    })
  }
}