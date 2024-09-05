import { Injectable } from '@angular/core';

export interface folder {
  folderName: string;
  createDate: string;
  updateDate: string;
  numFiles: number;
  idUser: string;
  images: string[];
}
@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  newFolder(folder: folder) {}
}
