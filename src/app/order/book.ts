export interface JsonBook {
  title: string;
  author: string;
  price: number;
}

export class Book {
  title: string;
  author: string;
  price: number;

  constructor(json: JsonBook) {
    this.title = json.title;
    this.author = json.author;
    this.price = json.price;
  }

  toString() {
    return `${this.title} - ${this.author} (${this.price})`;
  }
}
