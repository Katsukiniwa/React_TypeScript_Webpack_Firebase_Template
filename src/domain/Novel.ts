export class Novel {
  public readonly id: string;

  public title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
