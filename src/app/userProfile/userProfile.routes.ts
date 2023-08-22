import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { UserProfileComponent } from './components/userProfile.component';
import { UserProfileService } from './services/userProfile.service';
import { userProfileFeatureKey, userProfileReducer } from './store/reducers';
import * as userProfileEffects from './store/effects';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
export const routes: Route[] = [
  {
    path: '',
    component: UserProfileComponent,
    providers: [
      UserProfileService,
      provideState(userProfileFeatureKey, userProfileReducer),
      provideEffects(userProfileEffects),
    ],
  },
];
