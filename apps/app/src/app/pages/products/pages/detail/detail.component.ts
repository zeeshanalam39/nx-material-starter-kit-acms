import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from 'apps/app/src/app/shared/models/product.interface';
import { ProductService } from 'apps/app/src/app/shared/services/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  productId: string = '';
  productDetail!: IProductDetails;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((paramsData) => {
          this.productId = paramsData['productId'];
          // Todo: async |
          return this.productService.getProductDetail(this.productId);
        })
      )
      .subscribe((details: IProductDetails) => {
        if (details) {
          this.productDetail = details;
        }
      });
  }
}
