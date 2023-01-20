import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProduct } from '../../../../../shared/models/product.interface';
import { ProductService } from '../../../../../shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProduct(formData: any) {
    // Todo: any
    // Todo: Form Validation
    // Todo: Unsub
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.productService.addProduct(formData, httpOptions).subscribe(
      (data) => {
        if (data && data.id) {
          this.addProductForm.reset();
          // this.router.navigate(['products']);
        }
      },
      (error: Error) => {
        console.log(`Error adding new product: ${error}`);
      }
    );
  }
}
