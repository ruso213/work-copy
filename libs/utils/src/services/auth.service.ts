import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { inject, Injectable } from '@angular/core';
import { doc, setDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private db = inject(Firestore);
  constructor(private router: Router) {}

  logIn(hotel: string, email: string, password: string) {
    //crear interfaces necesarias
    return { hotel, email, password };
  }

  signUp(hotel: string, email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then((i) => {
      setDoc(doc(this.db, 'users', i.user.uid), {
        hotel: hotel,
        email: email,
        password: password,
      });
    });
    this.router.navigate(['home/multimedia']);
  }
}
