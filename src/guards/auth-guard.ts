import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private afAuth: AngularFireAuth, private router: Router) { }

	canActivate(): Observable<boolean> {
		return Observable.from(this.afAuth.authState)
		.take(1)
		.map(state => !! state)
		.do(authenticated => {
			if (!authenticated) { this.router.navigate(['/']); }
		});
	}
}

