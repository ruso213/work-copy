/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  file, folder, UploadFileComponent } from '@copia-chamba/ui';
import { FolderService, MultimediaService } from '@copia-chamba/utils';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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

  loading = true
  folder !:folder 
  uploadForm = this.formBuilder.group({
    images: ['']
  })

  filesList: file[] = []
  ngOnInit(): void {
    this.route.queryParams.subscribe(param=> this.multimediaService.getOneFolder(param['order'])
    .then(docSnap => this.folder = { ...docSnap.data() as folder, folderId: param['order']})
    .then(()=> this.getFiles()))
    
    this.uploadForm.get('images')?.valueChanges.subscribe(i =>this.change(i))
  }
  
  change(evt:any){
    const file = evt as File
    this.folderService.uploadFile(this.folder.folderName, file, this.folder.folderId)    
  }

  getFiles(){ 
    this.folderService.getListFiles(this.folder.folderId)
    .then(dataList => {
      const dataArray: file[] = [];
      dataList.forEach(data => {
        const filedata = data.data() as file
        dataArray.push(filedata)
      })
      this.filesList = dataArray
      this.loading = false
      
    })
  }
}