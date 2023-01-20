// import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../../shared/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productId: EventEmitter<string> = new EventEmitter();
  @Output() deleteProductId: EventEmitter<string> = new EventEmitter();

  constructor() {}

  showProductDetail(productId: string): void {
    this.productId.emit(productId);
  }

  deleteProduct(productId: string): void {
    this.deleteProductId.emit(productId);
  }
}
