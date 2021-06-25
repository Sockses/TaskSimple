export class SessionTask {
  constructor(
    public title: string,
    public created_at: string,
    public updated_at: string,
    public completed: boolean,
    public completed_at?: string
  ) {}
}
