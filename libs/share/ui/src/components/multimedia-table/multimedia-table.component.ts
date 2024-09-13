import { CommonModule } from '@angular/common';
import {Component, inject, Input, Output, EventEmitter} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { MatIcon } from '@angular/material/icon';
import { DocumentData } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-multimedia-table',
  standalone: true,
  imports: [CommonModule,CdkTableModule, MatIcon],
  templateUrl: './multimedia-table.component.html',
  styleUrl: './multimedia-table.component.scss',
})
export class MultimediaTableComponent {
  @Input() multimedia :DocumentData[] =[]
  @Input() displayedColumns!: string[] 
  @Output() row = new EventEmitter();
  router = inject(Router)
  
  clickRow(row: string){
    this.row.emit(row)
  }
}