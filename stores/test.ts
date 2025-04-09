import { defineStore } from 'pinia';

interface TestState {
  message: string;
}

export const useTestStore = defineStore('test', {
  state: (): TestState => ({
    message: 'Hello from Pinia!',
  }),
  actions: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    },
  },
});
