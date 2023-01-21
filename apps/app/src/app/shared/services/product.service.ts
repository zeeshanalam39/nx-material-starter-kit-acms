import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CATEGORIES_API_URL, PRODUCT_API_URL } from '../constants/app-config';
import {
  IAddProduct,
  IProductDetails,
  IProduct,
  IProductAdded,
} from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get getRefetch() {
    return this.refetchSubject.asObservable();
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(PRODUCT_API_URL);
  }

  getProductsByCategory(productCategory: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `${PRODUCT_API_URL}/category/${productCategory}`
    );
  }

  addProduct(
    body: IAddProduct,
    headers: HttpHeaders
  ): Observable<IProductAdded> {
    return this.http.post<IProductAdded>(
      PRODUCT_API_URL,
      JSON.stringify(body),
      { headers }
    );
  }

  getProductDetail(productId: string): Observable<IProductDetails> {
    return this.http.get<IProductDetails>(`${PRODUCT_API_URL}/${productId}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(CATEGORIES_API_URL);
  }

  deleteProduct(productId: string): Observable<IProduct> {
    return this.http
      .delete<IProduct>(`${PRODUCT_API_URL}/${productId}`)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }

  sortProducts(sortBy: string): Observable<IProduct[]> {
    /*
    * * * * *
    * * * * *
      I have used backend API to get sorted(asc|desc) results.
      Provided API is sorting products with `ids` instead of `price`.
      To demonstrate that I have shown product `id` with each product in listing.
    * * * * *
    * * * * *
    */
    if (sortBy === 'desc') {
      return this.http.get<IProduct[]>(`${PRODUCT_API_URL}?sort=${sortBy}`);
    } else {
      return this.getProducts();
    }
  }
}
