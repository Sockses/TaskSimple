// TODO: Should this and SesstionTask utilize
// inheritance or an abstract class?

export class Task {
  constructor(
    public uid: number,
    public title: string,
    public created_at: string,
    public updated_at: string,
    public completed: boolean,
    public completed_at?: string,
    public _id?: number
  ) {}
}
