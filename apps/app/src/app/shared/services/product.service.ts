import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CATEGORIES_API_URL, PRODUCT_API_URL } from '../constants/app-config';
import {
  AddProduct,
  IProductDetails,
  Product,
} from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}
  // Todo: Config - Base URL

  get getRefetch() {
    return this.refetchSubject.asObservable();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_API_URL);
  }

  addProduct(body: AddProduct, httpOptions: any): Observable<any> {
    // Todo: any
    return this.http.post<any>(
      PRODUCT_API_URL,
      JSON.stringify(body),
      httpOptions
    );
  }

  getProductDetail(productId: string): Observable<IProductDetails> {
    return this.http.get<IProductDetails>(`${PRODUCT_API_URL}/${productId}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(CATEGORIES_API_URL);
  }

  deleteProduct(productId: string): Observable<Product> {
    return this.http
      .delete<Product>(`${PRODUCT_API_URL}/${productId}`)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
