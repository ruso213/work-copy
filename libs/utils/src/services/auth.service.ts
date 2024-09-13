import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { inject, Injectable } from '@angular/core';
import { doc, setDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private db = inject(Firestore);
  constructor(private router: Router) {}

  logIn( email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
        this.router.navigate(['home/multimedia'])
      }
    )
  }

  signUp(hotel: string, email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then((i) => {
      setDoc(doc(this.db, 'users', i.user.uid), {
        hotel: hotel,
        email: email,
      }); 
    }).then(()=> this.router.navigate(['home/multimedia']));
  }

  logout(){
    signOut(this.auth)
  }
}
