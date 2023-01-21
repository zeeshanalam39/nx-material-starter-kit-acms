import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'apps/app/src/app/shared/models/product.interface';
import { ProductService } from 'apps/app/src/app/shared/services/product.service';
import { combineLatest, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss'],
})
export class ProductsByCategoryComponent implements OnInit, OnDestroy {
  products$!: Observable<IProduct[]>;
  category!: string;

  private deleteProductSubscription: Subscription | undefined;
  private combineLatestSubscription: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.combineLatestSubscription = combineLatest(
      this.route.params,
      this.productService.getRefetch
    ).subscribe(([paramsData, _]) => {
      this.category = paramsData['productCategory'];
      this.products$ = this.productService.getProductsByCategory(this.category);
    });
  }

  showProductDetail(productId: string): void {
    this.router.navigate(['product', productId]);
  }

  deleteProduct(productId: string): void {
    this.deleteProductSubscription = this.productService
      .deleteProduct(productId)
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.deleteProductSubscription) {
      this.deleteProductSubscription.unsubscribe();
    }
    if (this.combineLatestSubscription) {
      this.combineLatestSubscription.unsubscribe();
    }
  }
}
