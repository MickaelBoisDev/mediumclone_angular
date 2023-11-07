import { articleActions } from './../../../../article/store/actions';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { ArticleInterface } from 'src/app/shared/models/article.interface';
import { environment } from 'src/environments/environment.development';
import { ArticleResponseInterface } from 'src/app/shared/models/articleResponse.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .post<ArticleResponseInterface>(url, {})
      .pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .delete<ArticleResponseInterface>(url)
      .pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: ArticleResponseInterface): ArticleInterface {
    return response.article;
  }
}
