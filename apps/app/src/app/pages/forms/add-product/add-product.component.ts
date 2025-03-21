import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnDestroy {
  addProductForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  private addProductSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  addProduct(formData: any) {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.addProductSubscription = this.productService
      .addProduct(formData, httpOptions)
      .subscribe(
        (data) => {
          if (data && data.id) {
            this.addProductForm.reset();
            this.router.navigate(['products']);
          }
        },
        (error: Error) => {
          console.log(`Error adding new product: ${error}`);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.addProductSubscription) {
      this.addProductSubscription.unsubscribe();
    }
  }
}
