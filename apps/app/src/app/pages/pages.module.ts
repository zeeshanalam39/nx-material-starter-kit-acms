import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DetailComponent } from './products/pages/detail/detail.component';

@NgModule({
  declarations: [PagesComponent, DetailComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
