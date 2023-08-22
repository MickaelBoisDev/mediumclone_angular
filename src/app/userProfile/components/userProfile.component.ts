import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  standalone: true,
  imports: [];
})
export class UserProfileComponent {
  constructor(private store: Store) {

  }
}
