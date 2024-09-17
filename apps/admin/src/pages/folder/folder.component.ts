/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  file, folder, UploadFileComponent } from '@copia-chamba/ui';
import { FolderService, MultimediaService } from '@copia-chamba/utils';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule, UploadFileComponent, ReactiveFormsModule],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
})
export class FolderComponent implements OnInit{
  multimediaService = inject(MultimediaService)
  folderService = inject(FolderService)
  formBuilder = inject(FormBuilder)
  route = inject(ActivatedRoute)
  db = inject(Firestore)
  
  routeParam = ''
  loading : "loading" | "load"= "loading"
  folder !:folder 
  uploadForm = this.formBuilder.group({
    images: ['']
  })

  filesList: file[] = []
  ngOnInit(): void {
    this.route.queryParams.subscribe(param=> {
      this.routeParam = param['order']
      this.multimediaService.getOneFolder(param['order'])
      .then(docSnap => this.folder = { ...docSnap.data() as folder, folderId: param['order']})
    })
    const q = query(collection(this.db, "folder", this.routeParam, 'files'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const files :file[]= [];
      querySnapshot.forEach((doc) => {
        files.push(doc.data() as file);
    });
    this.filesList = files
    this.loading = "load"
    });
    this.uploadForm.get('images')?.valueChanges.subscribe(i =>this.change(i))
  }
  
  change(evt:any){
    const file = evt as File
    this.folderService.uploadFile(this.folder.folderName, file, this.folder.folderId)    
  }

  
}