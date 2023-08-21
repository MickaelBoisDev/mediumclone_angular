import { Route } from '@angular/router';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { CreateArticleService } from './services/createArticle.service';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import * as createArticleEffects from './store/effects';
import { createArticleFeatureKey, createArticleReducer } from './store/reducer';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      CreateArticleService,
      provideEffects(createArticleEffects),
      provideState(createArticleFeatureKey, createArticleReducer),
    ],
  },
];
