import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderRow} from '../order-row';
import {CatalogService} from '../catalog.service';
import {Book} from '../book';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit {

  rows = [
    new OrderRow('La Nuit des temps', 'René Barjavel', 7.43, 3),
    new OrderRow('Des fleurs pour Algernon', 'Daniel Keyes', 6.00, 5),
  ];
  books$: Observable<Book[]>;
  manualMode = false;
  constructor(private catalog: CatalogService) {
  }

  ngOnInit() {
    this.books$ = this.catalog.getList();
  }


  removeRow(row: OrderRow) {
    this.rows = this.rows.filter((r: OrderRow) => r !== row);
  }

  addRow(row: OrderRow) {
    this.rows.push(row);
  }
}
