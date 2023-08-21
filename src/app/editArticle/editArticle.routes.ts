import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import * as editArticleEffects from './store/effects';
import { editArticleFeatureKey, editArticleReducer } from './store/reducer';
import { EditArticleService } from './services/editArticle.service';
import { EditArticleComponent } from './components/createArticle/editArticle.component';

export const routes: Route[] = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      EditArticleService,
      provideEffects(editArticleEffects),
      provideState(editArticleFeatureKey, editArticleReducer),
    ],
  },
];
