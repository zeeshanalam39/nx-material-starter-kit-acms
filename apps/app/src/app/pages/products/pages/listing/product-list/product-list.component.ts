import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import {
  IDropdown,
  IProduct,
} from '../../../../../shared/models/product.interface';
import { ProductService } from '../../../../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products$!: Observable<IProduct[]>;
  categories$!: Observable<string[]>;

  dropdownPlaceholder = 'Sort by price';
  dropdownOptions: IDropdown[] = [
    { value: 'asc', viewValue: 'Low to high' },
    { value: 'desc', viewValue: 'High to low' },
  ];

  private deleteProductSubscription: Subscription | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productService.getRefetch.pipe(
      switchMap(() => this.productService.getProducts())
    );
    this.categories$ = this.productService.getCategories();
  }

  showProductDetail(productId: string): void {
    this.router.navigate(['product', productId]);
  }

  deleteProduct(productId: string): void {
    this.deleteProductSubscription = this.productService
      .deleteProduct(productId)
      .subscribe();
  }

  getProductsByCategory(category: string): void {
    this.router.navigate([category, 'products']);
  }

  sortProducts(sortBy: string): void {
    this.products$ = this.productService.sortProducts(sortBy);
  }

  ngOnDestroy(): void {
    if (this.deleteProductSubscription) {
      this.deleteProductSubscription.unsubscribe();
    }
  }
}
