import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../models/registerRequest.interface';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
