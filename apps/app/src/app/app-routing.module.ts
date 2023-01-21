import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/products/pages/forms/add-product/add-product.component';
import { ProductListComponent } from './pages/products/pages/listing/product-list/product-list.component';
import { ProductsByCategoryComponent } from './pages/products/pages/listing/products-by-category/products-by-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
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
    loadChildren: () =>
      import('../app/pages/products/pages/detail/detail.module').then(
        (m) => m.DetailModule
      ),
  },
  {
    path: ':productCategory/products',
    pathMatch: 'full',
    component: ProductsByCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
