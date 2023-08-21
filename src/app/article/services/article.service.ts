import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.delete(fullUrl);
  }
}
