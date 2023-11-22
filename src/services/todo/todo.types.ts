import {ITodo} from "../../entities/todo";


export interface ITodoService {
    getAll(): Promise<ITodo[]>;
    get(id: string): Promise<ITodo>;
    create(data: ITodo): Promise<ITodo>;
    update(id: string, data: ITodo): Promise<ITodo>;
    delete(id: string): Promise<void>;

}
