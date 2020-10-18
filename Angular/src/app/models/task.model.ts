export class Task {
  constructor(
    public id: string,
    public uid: number,
    public title: string,
    public createdAt: string,
    public updatedAt: string,
    public completed: boolean,
    public completedAt?: string
  ) {}
}
