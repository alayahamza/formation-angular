import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../book';
import {OrderRow} from '../order-row';

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})
export class OrderCatalogFormComponent implements OnInit {

  @Input() catalog: Book[];
  @Output() add = new EventEmitter<OrderRow>();

  data: { book?: Book, quantity?: number } = {};

  constructor() {
  }

  ngOnInit() {
  }

  emitAdd() {
    this.add.emit(new OrderRow(
      this.data.book.title,
      this.data.book.author,
      this.data.book.price,
      this.data.quantity || 1
    ));
    this.data = {};
  }

}
