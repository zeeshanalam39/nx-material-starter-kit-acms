import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { AddProductComponent } from './pages/forms/add-product/add-product.component';
import { ProductListComponent } from './pages/listing/product-list/product-list.component';
import { ProductsByCategoryComponent } from './pages/listing/products-by-category/products-by-category.component';

const routes: Routes = [
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'add-product',
    pathMatch: 'full',
    component: AddProductComponent,
  },
  {
    path: 'product',
    pathMatch: 'prefix',
    component: DetailComponent,
  },
  {
    path: ':productCategory/products',
    pathMatch: 'full',
    component: ProductsByCategoryComponent,
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
