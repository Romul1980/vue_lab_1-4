<script lang="ts">
import {Todo} from "@/entities/todo";
import TodoForm from "@/components/ToDo/TodoForm.vue";
import TheTodo from "@/components/ToDo/TheTodo.vue";

// SMART COMPONENT EXAMPLE
export default {
    name: "TheTodoItems",
    components: {TheTodo, TodoForm},
    data() {
        return {
            items: [],
            loading: false,
            todo: new Todo({status: "in progress"})
        }
    },
    mounted() {
        this.getDate();
    },
    methods: {
        async getDate() {
            try {
                this.loading = true;
                this.items = await this.$services.todos.getAll();
            } catch (e) {
                console.log(e);
            } finally {
                this.loading = false;
            }
        },
        async remove(model) {
            // ADD USING TOTOSERVICE
            //alert("remove Id = " + model.id);
            try {
              this.loading = true;
              this.$services.todos.delete(model.id);
              //this.items = await this.$services.todos.getAll();
            } catch (e) {
              console.log(e);
            } finally {
              this.loading = false;
            }
        },
        async add(model) {
            // ADD USING TOTOSERVICE
            this.todo = new Todo({status: "in progress"});
            model.id = this.items.length + 1;
          try {
            this.loading = true;
            await this.$services.todos.create(model);
          } catch (e) {
            console.log(e);
          } finally {
            this.loading = false;
          }

        },
        edit(model) {
            this.todo = model;
        },
        save(model) {
            // ADD USING TOTOSERVICE
          try {
            this.loading = true;
            this.$services.todos.update(model.id, model);
          } catch (e) {
            console.log(e);
          } finally {
            this.loading = false;
          }
          this.todo = new Todo({status: "in progress"});
        },
        done(model) {
           model.status = "done";
        }
    }
}
</script>

<template>
    <div class="todo">
        <h1 class="todo--title">Todo</h1>
        <TodoForm :todo="todo" @add="add" @save="save"/>

      <table class="table mb-4">
        <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Todo item</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
        </thead>
            <tbody>
            <TheTodo v-for="item in items"
                     :item="item"
                     @edit="edit"
                     @remove="remove"
                     @done="done"/>
            </tbody>
          </table>
    </div>
</template>

