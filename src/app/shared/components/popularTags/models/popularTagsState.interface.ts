import { PopularTagType } from 'src/app/shared/models/popularTag.type';
import { GetPopularTagsResponseInterface } from './getPopularTagsResponse.interface';

export interface PopularStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
