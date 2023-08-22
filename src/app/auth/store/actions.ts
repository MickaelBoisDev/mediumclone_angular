import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../models/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { BackendErrorsInterface } from '../../shared/models/backendErrors.interface';
import { LoginRequestInterface } from '../models/loginRequest.interface';
import { CurrentUserRequestInterface } from 'src/app/shared/models/currentRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    'Login success': props<{ currentUser: CurrentUserInterface }>(),
    'Login failure': props<{ errors: BackendErrorsInterface }>(),

    'Get Current user': emptyProps(),
    'Get Current user success': props<{ currentUser: CurrentUserInterface }>(),
    'Get Current user failure': emptyProps(),

    'Update Current user': props<{
      currentUserRequest: CurrentUserRequestInterface;
    }>(),
    'Update Current user success': props<{
      currentUser: CurrentUserInterface;
    }>(),
    'Update Current user failure': props<{ errors: BackendErrorsInterface }>(),

    Logout: emptyProps(),
  },
});
