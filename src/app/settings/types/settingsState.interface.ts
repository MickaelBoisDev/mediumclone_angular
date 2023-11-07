import { BackendErrorsInterface } from 'src/app/shared/models/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
