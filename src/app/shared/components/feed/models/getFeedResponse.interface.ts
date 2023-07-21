import { ArticleInterface } from 'src/app/shared/models/article.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
