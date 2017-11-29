export class Food {
  name = null;
  calories = null;
  image = null;
  quantity = null;
  constructor(data: Object = null) {
    Object.assign(this, data);
  }
}
