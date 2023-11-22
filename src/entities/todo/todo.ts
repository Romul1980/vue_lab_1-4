import type {ITodo} from "@/entities/todo/todo.types";

export class Todo implements ITodo {
    public id: string
    public title: string
    public description: string
    public status: string
    constructor(data: ITodo = {} as ITodo){
        this.id = data.id ?? 0
        this.title = data.title ?? ''
        this.description = data.description ?? ''
        this.status = data.status ?? ''
    }
}
