import { Touche } from './touche.model';

export class Ligne {
  id: number;
  touches: Touche[];

  constructor(obj: Partial<Ligne>) {
    Object.assign(this, obj);
  }
}