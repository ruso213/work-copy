import { getStorage, ref, uploadBytes,getDownloadURL } from '@angular/fire/storage';
import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private auth = inject(Auth)

  uploadFile(folderName: string, file: File){
    const storage = getStorage();
    const fileRef =`${this.auth.currentUser?.uid}/${folderName}/${file.name}`;
    const storageRef= ref(storage, fileRef);
    return uploadBytes(storageRef,file);
     
  }

  getUrlFile(folderName: string, file: File){
    const storage = getStorage();
    const fileRef =`${this.auth.currentUser?.uid}/${folderName}/${file.name}`;
    const storageRef= ref(storage, fileRef);
    return getDownloadURL(storageRef)
  }
}
