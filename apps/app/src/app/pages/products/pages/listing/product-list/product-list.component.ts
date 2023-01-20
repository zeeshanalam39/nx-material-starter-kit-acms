import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../../../../../shared/models/product.interface';
import { ProductService } from '../../../../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  categories$!: Observable<string[]>;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productService.getRefetch.pipe(
      switchMap(() => this.productService.getProducts())
    );
    this.categories$ = this.productService.getCategories();
  }

  showProductDetail(productId: string): void {
    // Todo: Pass product details w/ route
    this.router.navigate(['product', productId]);
  }

  deleteProduct(productId: string): void {
    // Todo: Inline button
    this.productService.deleteProduct(productId).subscribe();
  }
}
