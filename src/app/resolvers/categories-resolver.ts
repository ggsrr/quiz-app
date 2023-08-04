import {ResolveFn} from "@angular/router";
import {Category} from "../models/category.model";
import {inject} from "@angular/core";
import {CategoryService} from "../services/category.service";

export const categoriesResolver: ResolveFn<Category[]> =
  () => {
  return inject(CategoryService).getCategories();
}
