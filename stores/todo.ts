import { defineStore } from 'pinia';

interface Todo {
  id: number;
  text: string;
  isRead: boolean;
  isFav: boolean;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [
      { id: 1, text: 'Learn Vue.js', isRead: false, isFav: true },
      { id: 2, text: 'Explore Pinia', isRead: true, isFav: false },
      { id: 3, text: 'Build a Nuxt app', isRead: false, isFav: false }
    ] as Todo[],
    nextId: 4
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({
        id: this.nextId++,
        text,
        isRead: false,
        isFav: false
      });
    },
    editTodo(id: number, newText: string) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    toggleRead(id: number) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.isRead = !todo.isRead;
      }
    },
    toggleFav(id: number) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.isFav = !todo.isFav;
      }
    }
  }
});