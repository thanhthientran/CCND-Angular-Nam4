export class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getName() : string {
    return this.name;
  }
  setName(name: string){
    this.name = name;
  }

  getId() : number {
    return this.id;
  }
  setId(id: number){
    this.id = id;
  }
}
