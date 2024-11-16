import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './store/reducers/userVerification.reducers';
import { verifyUser } from './store/actions/userVerification.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elevate';
  constructor(private readonly store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store.dispatch(verifyUser());
  }
}
