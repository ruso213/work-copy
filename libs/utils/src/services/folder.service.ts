import { getStorage, ref, uploadBytes,getDownloadURL } from '@angular/fire/storage';
import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { MultimediaService } from './multimedia.service';
import { collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { file } from '@copia-chamba/ui';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private auth = inject(Auth)
  private multimediaService = inject(MultimediaService)
  private db = inject(Firestore);


  uploadFile(folderName: string, file: File, folderId: string){
    const storage = getStorage();
    const storageRef= ref(storage, `${this.auth.currentUser?.uid}/${folderName}/${file.name}`);
    return uploadBytes(storageRef,file).then(meta => {
      getDownloadURL(storageRef).then(url => {
        const infoFile : file= {
          timeCreated: meta.metadata.timeCreated,
          fullPath: meta.metadata.fullPath,
          updated: meta.metadata.updated,
          downloadUrl : url
        }
        this.multimediaService.addFile(folderId,infoFile)
      })
    });
  }
  getListFiles(folderId: string){
    const q = query(collection(this.db,'folder', folderId,'files'))
    return getDocs(q)
  }
}