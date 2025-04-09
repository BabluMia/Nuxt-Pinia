<template>
    <div class="container">
      <h1 class="title">To Do List Pinia</h1>
      <div class="input-group">
        <input
          v-model="newTask"
          placeholder="Add a new task"
          class="input-field"
        />
        <button
          @click="addTask"
          class="add-button"
        >
          Add
        </button>
      </div>
      <ul class="todo-list">
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="todo-item"
          :class="{ read: todo.isRead, fav: todo.isFav }"
        >
          <div>
            <div v-if="editingTodo.id !== todo.id">
              <span class="todo-text">{{ todo.text }}</span>
              <button
                @click="startEdit(todo)"
                class="edit-button"
              >
                Edit
              </button>
            </div>
            <div v-else class="edit-group">
              <input
                v-model="editingTodo.text"
                @keyup.enter="saveEdit"
                class="edit-input"
              />
              <button @click="saveEdit" class="save-button">Save</button>
            </div>
            <div class="actions-group">
              <button
                @click="toggleRead(todo.id)"
                class="action-button read-button"
                :class="{ read: todo.isRead }"
              >
                {{ todo.isRead ? 'Read' : 'Unread' }}
              </button>
              
            </div>
          </div>
          <button
            @click="removeTask(todo.id)"
            class="remove-button"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useTodoStore } from '../../../stores/todo';
  import { storeToRefs } from 'pinia';
  
  const todoStore = useTodoStore();
  const { todos } = storeToRefs(todoStore);
  const newTask = ref('');
  const editingTodo = ref<{ id: number | null, text: string }>({ id: null, text: '' });
  
  const addTask = () => {
    if (newTask.value.trim()) {
      todoStore.addTodo(newTask.value);
      newTask.value = '';
    }
  };
  
  const removeTask = (id: number) => {
    todoStore.removeTodo(id);
  };
  
  const toggleRead = (id: number) => {
    todoStore.toggleRead(id);
  };
  
 
  
  const startEdit = (todo: { id: number, text: string }) => {
    editingTodo.value = { id: todo.id, text: todo.text };
  };
  
  const saveEdit = () => {
    if (editingTodo.value.id !== null) {
      todoStore.editTodo(editingTodo.value.id, editingTodo.value.text);
      editingTodo.value = { id: null, text: '' };
    }
  };
  </script>
  
  <style>
  .container {
    padding: 1rem;
    max-width: 28rem;
    margin: 0 auto;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .input-group {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .input-field {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
  }
  
  .add-button {
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
  }
  
  .add-button:hover {
    background-color: #2563eb;
  }
  
  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .todo-item {
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .todo-item.read {
    background-color: #f9fafb;
  }
  
  .todo-item.fav {
    border-color: #facc15;
  }
  
  .todo-text {
    font-weight: 500;
  }
  
  .actions-group {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
  
  .action-button {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
  }
  
  .read-button {
    background-color: #e5e7eb;
  }
  
  .read-button.read {
    background-color: #dcfce7;
  }
  
  .fav-button {
    background-color: #e5e7eb;
  }
  
  .fav-button.fav {
    background-color: #fef9c3;
  }
  
  .remove-button {
    color: #ef4444;
    transition: color 0.2s;
  }
  
  .remove-button:hover {
    color: #dc2626;
  }
  
  .edit-button {
    margin-left: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: #e5e7eb;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
  }
  
  .edit-button:hover {
    background-color: #d1d5db;
  }
  
  .edit-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .edit-input {
    padding: 0.25rem 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
  }
  
  .save-button {
    padding: 0.25rem 0.5rem;
    background-color: #dcfce7;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
  }
  
  .save-button:hover {
    background-color: #bbf7d0;
  }
  </style>