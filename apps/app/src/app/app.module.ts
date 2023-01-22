import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/forms/add-product/add-product.component';
import { ProductListComponent } from './pages/listing/product-list/product-list.component';
import { ProductsByCategoryComponent } from './pages/listing/products-by-category/products-by-category.component';
import { CategoryComponent } from './pages/shared/category/category.component';
import { DropdownComponent } from './pages/shared/dropdown/dropdown.component';
import { ProductComponent } from './pages/shared/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsByCategoryComponent,
    ProductComponent,
    AddProductComponent,
    CategoryComponent,
    DropdownComponent,
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
