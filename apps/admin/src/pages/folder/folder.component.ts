import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  folder, UploadFileComponent } from '@copia-chamba/ui';
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
  folder !:folder 
  uploadForm = this.formBuilder.group({
    images: ['']
  })
  preLoadImg: any = 'https://www.freeiconspng.com/uploads/pictures-icon-22.gif'
  ngOnInit(): void {
      this.route.queryParams.subscribe(param=> this.multimediaService.getOneFolder(param['order']).then(i => this.folder = i.data() as folder))
      this.uploadForm.get('images')?.valueChanges.subscribe(i =>{
        if (i) this.preLoadImg = i
        this.change(i)
      })
  }

  change(evt:any){
    const file = evt as File
    this.preLoadImg = this.folderService.uploadFile(this.folder.folderName, file).then(() =>{
      this.folderService.getUrlFile(this.folder.folderName, file).then(i => this.preLoadImg = i)
    })
    
  }
}