<template>
    <form class="todo-form">
        <input v-model="model.title" type="text" class="todo-form--input" placeholder="Title">
        <input v-model="model.description" type="text" class="todo-form--input" placeholder="Description">
        <button v-if="model.id" @click.prevent="save" class="btn btn-primary">Save</button>
        <button v-else @click.prevent="add" class="btn btn-primary">Add</button>
    </form>
</template>
<script lang="ts">
import {Todo} from "@/entities/todo";

// DUMMY COMPONENT EXAMPLE
export default {
    name: 'TodoForm',
    props: { // WE MUST NOT CAHNGE PROPS!!!
        todo: {
            type: Todo,
            default: () => (new Todo({status: 'in progress'}) as Todo)
        },
    },
    data() {
        return {
            model: new Todo({
                status: 'in progress'
            })
        }
    },
    watch: {
      todo: {
          handler(value){
              this.model = new Todo({...value});
          },
          immediate: true
      }
    },
    methods: {
        add() {
            this.$emit("add", this.model);
        },
        save() {
            this.$emit("save", this.model);
        }
    }
}
</script>

