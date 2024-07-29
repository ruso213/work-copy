import { BehaviorSubject } from 'rxjs';
import { folder } from '../../types/folder.type';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(
    private firestore: Firestore
  ){}

  private multimedia :BehaviorSubject<folder[]> = new BehaviorSubject<folder[]>([{
    folderName:'jjj',
    createDate:'hjjk',
    numFiles: 0,
    updateDate:'jjj',
    images:[]
  }])
  $multimedia = this.multimedia.asObservable()
  newFolder(folder : folder){
    const currentValue = this.multimedia.value
    const updateValue = [...currentValue, folder]
    this.multimedia.next(updateValue)
  }
}