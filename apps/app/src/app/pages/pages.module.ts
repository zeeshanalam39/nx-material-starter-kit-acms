import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DetailComponent } from './products/pages/detail/detail.component';
import { DropdownComponent } from './products/pages/shared/dropdown/dropdown.component';
import { ProductsByCategoryComponent } from './products/pages/listing/products-by-category/products-by-category.component';
import { ProductComponent } from './products/pages/shared/product/product.component';

@NgModule({
  declarations: [
    PagesComponent,
    DetailComponent,
    DropdownComponent,
    ProductsByCategoryComponent,
    ProductComponent
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
