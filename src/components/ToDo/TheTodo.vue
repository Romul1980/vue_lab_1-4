<template>
  <tr>
      <td>{{ item.id }}</td>
      <td :class="{'done': item.status === 'done' }">{{ item.title }}</td>
      <td>{{ item.description }}</td>
      <td>{{ item.status }}</td>
      <td>
        <button @click.prevent="$emit('edit', item)" class="btn btn-warning">Edit</button>
      </td>
      <td>
         <button @click.prevent="$emit('done', item)" class="btn btn-success ms-1">Done</button>
      </td>
      <td>
        <button @click.prevent="$emit('remove', item)" class="btn btn-danger">Remove</button>
      </td>
  </tr>
</template>
<script lang="ts">
import {Todo} from "@/entities/todo";

// DUMMY COMPONENT EXAMPLE
export default {
    name: 'TheTodo',
    props: {
        item: {
            type: Todo,
            default: () => (new Todo({
                status: 'new'
            }) as Todo)
        },
    }
}
</script>


