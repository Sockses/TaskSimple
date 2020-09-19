export class Task {
    public title: string;
    public completed: boolean;
    public createdAt: string;
    public updatedAt: string;
    public completedAt: string;

    constructor(title: string, completed: boolean, createdAt: string, updatedAt: string, completedAt: string) {
        this.title = title;
        this.completed = completed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.completedAt = completedAt;
    }
}