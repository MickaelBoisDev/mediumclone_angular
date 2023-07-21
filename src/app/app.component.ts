import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
