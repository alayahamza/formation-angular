import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderRow} from '../order-row';

@Component({
  selector: 'app-order-manual-form',
  templateUrl: './order-manual-form.component.html',
  styleUrls: ['./order-manual-form.component.css']
})
export class OrderManualFormComponent implements OnInit {

  @Output() add = new EventEmitter<OrderRow>();
  data = new OrderRow();

  constructor() {
  }

  ngOnInit() {
  }

  emitAdd() {
    this.add.emit(this.data);
    this.data = new OrderRow();
  }
}
