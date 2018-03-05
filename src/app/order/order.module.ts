import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderRootComponent} from './order-root/order-root.component';
import {OrderTableComponent} from './order-table/order-table.component';
import {OrderManualFormComponent} from './order-manual-form/order-manual-form.component';
import {OrderCatalogFormComponent} from './order-catalog-form/order-catalog-form.component';
import {FormsModule} from '@angular/forms';
import {CatalogService} from './catalog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrderRootComponent, OrderTableComponent, OrderManualFormComponent, OrderCatalogFormComponent],
  exports: [OrderRootComponent],
  providers: [CatalogService
  ]
})
export class OrderModule {
}
