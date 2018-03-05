import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {OrderRow} from '../order-row';
import {ReduceUtil} from '../reduce-util';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  @Input() rowsArray: OrderRow[];
  @Output() remove = new EventEmitter<OrderRow>();

  constructor(@Inject(LOCALE_ID) private locate: string) {
  }

  ngOnInit() {
  }

  totalHt() {
    return this.rowsArray
      .map(row => row.ht())
      .reduce(ReduceUtil.total, 0);
  }

  totalTtc() {
    return this.rowsArray
      .map(row => row.ttc())
      .reduce(ReduceUtil.total, 0);
  }

  isBig(row: OrderRow) {
    return row.ht() >= 1000;
  }

}
