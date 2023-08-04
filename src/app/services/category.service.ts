import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Category} from "../models/category.model";
import {CategoryApiResponse} from "../models/category-api-response.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = 'https://opentdb.com/api_category.php';

  constructor (private http: HttpClient){
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<CategoryApiResponse>(this.categoryUrl,{responseType: 'json'}).pipe(
      map(data => data.trivia_categories as Category[]),
      tap(data => console.log('Category : ' + JSON.stringify(data)))
    );
  }
}
