export class Car {
  id: number;
  // color: string;
  model: string;
  number: string;

  toString(): string {
    return `${this.model} ${this.number}`;
  }
}
