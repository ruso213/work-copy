import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
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
export class MultimediaTableComponent {
  multimedia :folder[] =[]
  displayedColumns = ['name', 'updateDate', 'numFiles']
 
  openFolder(folderId: string){
      console.log(folderId);
      
  }
}