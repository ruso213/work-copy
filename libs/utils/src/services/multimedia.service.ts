import { Auth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection,query, where } from '@angular/fire/firestore';
import { doc, DocumentData, getDocs,getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  constructor(private db: Firestore, private auth: Auth) {}
  private multimediaFolders: DocumentData[] = []

  get getMultimediaFolders(){
    return this.multimediaFolders
  }
  getfolders() {
    const collectionRef = collection(this.db,'folder')
    const q = query(collectionRef, where("idUser", "==", this.auth.currentUser?.uid)) 
    const querySnapshot = getDocs(q)
    querySnapshot.then(i => {
      i.forEach((doc) => {
          this.multimediaFolders.push(
            {
              ...doc.data(),
              folderId: doc.id
            }
          )
      });
    })
    return querySnapshot
  }

  getOneFolder(folderId: string){
    const docRef = doc(this.db,'folder',folderId)
    const docSnap = getDoc(docRef)
    return  docSnap
  }

  addFolder(folderName: string) {
    if (!this.auth.currentUser?.uid) return
    const foldersRef = collection(this.db, 'folder');
    addDoc(foldersRef, {
      folderName: folderName,
      createDate: 'fasf',
      updateDate: 'asfsaf',
      idUser: this.auth.currentUser?.uid,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addFile(folderId: string, data: any) {
    const collectionRef = collection(this.db, 'folder', folderId, 'files');
    return addDoc(collectionRef, data);
  }
}
