import {ITodo, Todo} from "../../entities/todo";
import {ITodoService} from "./todo.types";
import {ref} from "vue";


var items = ref([
    new Todo({
        id: '1',
        title: 'To wash a car',
        description: 'wax',
        status: 'in progress'
    }),
    new Todo({
        id: '2',
        title: 'Buy milk',
        description: 'lactose free',
        status: 'in progress'
    }),
    new Todo({
        id: '3',
        title: 'Рay the mortgage',
        description: 'by Thursday',
        status: 'in progress'
    }),
    new Todo({
        id: '4',
        title: 'Renew car insurance',
        description: 'for 2 cars',
        status: 'in progress'
    })
]);

/**
 * @name Todo
 */
export class TodoService implements ITodoService {
    /**
     * @name getAll
     * @description Get all todos
     * @returns {Promise<ITodo[]>}
     */
    public async getAll(): Promise<ITodo[]> {
        return new Promise<ITodo[]>((resolve) => {
            resolve(items);
        })
    }

    public async get(id: string): Promise<ITodo> {
        return {} as ITodo
    }

    public async create(data: ITodo): Promise<ITodo> {
        items.value.push(new Todo(data));
        return;
    }

    public async update(id: string, data: ITodo): Promise<ITodo> {
        items.value[id-1] = data;
        return {} as ITodo
    }
    public async delete(id: string): Promise<void> {
        //alert(items.value.length + '  ' + id);
        items.value.splice(id-1,1);

        for (let _i = 0; _i < items.value.length; _i++){
            items.value[_i].id = _i+1;
        }
        return
    }

}
