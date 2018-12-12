import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  userAuth = false;
  scrollD = false;
  user: Observable<firebase.User>;

  constructor(public snackBar: MatSnackBar) {  }


  ngOnInit() { }

  someMethod() {
    this.trigger.openMenu();
  }
  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      if (window.scrollY >= 40) {
        this.scrollD = true;
      } else {
        this.scrollD = false;
      }
    }

 /*  signWithGoogle(): void {
    this.afAuth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {

          this.userAuth = true;
          this.auth.user = res.user;
          this.auth.uid = res.uid;
          this.auth.avatar = res.user.photoURL.replace('s96-c', 's512-c');
          this.auth.name = res.user.displayName;
          this.auth.email = res.email;

            res.user.getIdToken(false)
                    .then(idToken => {
                        this.auth.idToken = idToken;
                                }, error => {
                                  this.userAuth = true;
                                    console.log(error);

                                    if (error && error.toString().indexOf('permission_denied')) {
                                      this.userAuth = true;
                                    } else {
                                        this.snackBar
                                            .open('Houve erro durante o processo de requisição', 'RETRY', { duration: 5000 })
                                            .onAction().subscribe(() => this.signWithGoogle());
                                            this.afAuth.auth.signOut();
                                    }
                                });
                    })
                    .catch(e => {
                        console.log('Falha na obtenção do ID!');
                        this.afAuth.auth.signOut();
                        this.userAuth = true;
                        this.snackBar
                            .open('Houve erro durante o processo de requisição', 'RETRY', { duration: 5000 })
                            .onAction().subscribe(() => this.signWithGoogle());
                            this.afAuth.auth.signOut();
                    });
              if (this.auth.authenticated) {
                      this.snackBar
                              .open('Login realizado com Sucesso!', '', { duration: 5000 });
                            }
}
  sairApp() {
    this.auth.logOut();
    this.userAuth = false;
    this.snackBar
    .open('Logout Bem Sucessido!', '', { duration: 5000 });
  }
 */
}
