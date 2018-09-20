export class User {
  id: number;
  firstName: string;
  lastName: string;
  image_url: string;
  getFullName(): string {return this.firstName + ' ' + this.lastName};
}
