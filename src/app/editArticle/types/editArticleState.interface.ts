import { ArticleInterface } from 'src/app/shared/models/article.interface';
import { BackendErrorsInterface } from './../../shared/models/backendErrors.interface';
export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
