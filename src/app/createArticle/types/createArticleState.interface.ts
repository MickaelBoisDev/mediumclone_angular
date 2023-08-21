import { BackendErrorsInterface } from '../../shared/models/backendErrors.interface';
export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
