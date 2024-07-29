import { MultimediaService } from './../../../../../utils/src/services/multimedia.service';
import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { MatIcon } from '@angular/material/icon';
import { folder } from '../../models/folder.type';

@Component({
  selector: 'lib-multimedia-table',
  standalone: true,
  imports: [CommonModule,CdkTableModule, MatIcon],
  templateUrl: './multimedia-table.component.html',
  styleUrl: './multimedia-table.component.scss',
})
export class MultimediaTableComponent implements OnInit{
  multimedia :folder[] =[]
  displayedColumns = ['name', 'updateDate', 'numFiles']
  constructor(
    private multimediaService: MultimediaService
  ){}
  ngOnInit(): void {
    this.multimediaService.$multimedia.subscribe(i =>{
      this.multimedia = i
    })
    
  }
  openFolder(folderId: string){
      console.log(folderId);
      
  }
}