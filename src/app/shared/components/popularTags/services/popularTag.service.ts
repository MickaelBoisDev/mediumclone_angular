import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { GetPopularTagsResponseInterface } from '../models/getPopularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/models/popularTag.type';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const fullUrl = environment.apiUrl + '/tags';
    return this.http
      .get<GetPopularTagsResponseInterface>(fullUrl)
      .pipe(map((response) => response.tags));
  }
}
