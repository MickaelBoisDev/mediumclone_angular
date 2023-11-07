import { routerNavigatedAction } from '@ngrx/router-store';
import { SettingsStateInterface } from './../types/settingsState.interface';
import { TypedAction } from '@ngrx/store/src/models';
import { authActions } from 'src/app/auth/store/actions';
import { CurrentUserRequestInterface } from 'src/app/shared/models/currentRequest.interface';
import { createFeature, createReducer, on } from '@ngrx/store';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCurrentUserFailure, (state, action) => ({
      ...state,
      isSubmitting: true,
      validationErrors: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = settingsFeature;
