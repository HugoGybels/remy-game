export class Touche {
  id: number;
  selected: boolean;

  constructor(obj: Partial<Touche>) {
    Object.assign(this, obj);
  }
}