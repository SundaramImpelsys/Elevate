// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthState } from './store/reducers/userVerification.reducers';
import { selectIsLoggedIn } from './store/selectors/userVerification.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly store: Store<AuthState>, private readonly router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1), // Take only the first emitted value
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        } else {
          alert('Session expired. Please log in.');
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
