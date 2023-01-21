import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './pages/products/pages/shared/product/product.component';
import { ProductListComponent } from './pages/products/pages/listing/product-list/product-list.component';
import { AddProductComponent } from './pages/products/pages/forms/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/products/pages/shared/category/category.component';
import { DropdownComponent } from './pages/products/pages/shared/dropdown/dropdown.component';
import { ProductsByCategoryComponent } from './pages/products/pages/listing/products-by-category/products-by-category.component';

@NgModule({
  declarations: [
    // Todo - Import Module instead of comps.
    AppComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
    ProductComponent,
    AddProductComponent,
    CategoryComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
