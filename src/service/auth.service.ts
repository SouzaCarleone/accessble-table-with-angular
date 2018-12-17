import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	public authState: any = null;
	public user: Observable<any>;
	public avatar: string = null;
	public uid: string = null;
	public name: string = null;
	public email: string = null;
	public idToken: string = null;

	constructor( public afAuth: AngularFireAuth, public router: Router) { }


	 // Returns true if user is logged in
	 get authenticated(): boolean {
		return this.authState !== null;
	  }

	  // Returns current user data
	  get currentUser(): any {
		return this.authenticated ? this.authState : null;
	  }

	  // Returns
	  get currentUserObservable(): any {
		return this.afAuth.authState;
	  }

	  // Returns current user UID
	  get currentUserId(): string {
		return this.authenticated ? this.authState.uid : '';
	  }

	logOut() {
		this.authState = false;
		this.afAuth.auth.signOut();
		this.authState = false;
		if (window && window.localStorage) {
			window.localStorage.clear();
		}
		this.user = null;
		this.avatar = null;
		this.idToken = null;
		this.name = null;

		this.router.navigate(['/']);
	}

}

