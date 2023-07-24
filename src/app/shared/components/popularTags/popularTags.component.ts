import { ErrorMessageComponent } from 'src/app/shared/components/errorMessage/errorMessage.component';
import { popularTagsActions } from './store/actions';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectPopularTagsData,
} from './store/reducers';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent, ErrorMessageComponent],
})
export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    popularTags: this.store.select(selectPopularTagsData),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchPopularTags();
  }
  fetchPopularTags(): void {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
