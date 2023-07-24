import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetPopularTagsResponseInterface } from '../models/getPopularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/models/popularTag.type';

export const popularTagsActions = createActionGroup({
  source: 'Popular tags',
  events: {
    'Get popular tags': emptyProps(),
    'Get popular tags success': props<{
      popularTags: PopularTagType[];
    }>(),
    'Get popular tags failure': emptyProps(),
  },
});
