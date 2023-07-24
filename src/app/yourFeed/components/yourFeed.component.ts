import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { ErrorMessageComponent } from 'src/app/shared/components/errorMessage/errorMessage.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { feedTogglerComponent } from 'src/app/shared/components/feedToggler/feedToggler.component';
import { PopularTagsComponent } from 'src/app/shared/components/popularTags/popularTags.component';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './yourFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    ErrorMessageComponent,
    PopularTagsComponent,
    feedTogglerComponent,
  ],
})
export class YourFeedComponent {
  constructor() {}
  apiUrl = '/articles/feed';
}
