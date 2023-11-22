import {IProvider} from "./provider.types";
import {TodoService} from "./todo";


export const provider=():IProvider=>{
    return {
        todos: new TodoService()
    }
}
