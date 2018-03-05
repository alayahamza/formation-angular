export class OrderRow {
  constructor(public title?: string,
              public author?: string,
              public price?: number,
              public quantity?: number) {
  }

  ht(): number {
    return this.price * this.quantity;
  }

  ttc(): number {
    return this.ht() * 1.005;
  }
}
