import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddToFavoritesService } from './services/addToFavorites.service';
import { Store } from '@ngrx/store';
import { addToFavoritesActions } from './store/action';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean = false;
  @Input() favoritesCount: number = 0;
  @Input() articleSlug: string = '';

  constructor(private store: Store) {}
  handleLike(): void {
    this.store.dispatch(
      addToFavoritesActions.addToFavorites({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
