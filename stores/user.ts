import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
  age: number
  phone: string
  address: string
  company: string
}

interface State {
  users: User[]
  loading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    users: [],
    loading: false
  }),

  actions: {
    async fetchUsers(): Promise<void> {
      this.loading = true
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        this.users = data.map((user: User) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          age: Math.floor(Math.random() * 20 + 20), // Simulated age
          phone: user.phone,
          address: typeof user.address === 'string' ? user.address : `${(user.address as { street: string; city: string }).street}, ${(user.address as { street: string; city: string }).city}`,
          company: typeof user.company === 'string' ? user.company : (user.company as { name: string }).name,
        }))
      } catch (err) {
        console.error('Error fetching users:', err)
      } finally {
        this.loading = false
      }
    },

    searchUsers(query: string): User[] {
      if (!query) return this.users;
      
      const lowerCaseQuery = query.toLowerCase();
      return this.users.filter(user => 
        user.name.toLowerCase().includes(lowerCaseQuery) ||
        user.email.toLowerCase().includes(lowerCaseQuery) ||
        user.address.toLowerCase().includes(lowerCaseQuery) ||
        user.phone.toLowerCase().includes(lowerCaseQuery) ||
        user.company.toLowerCase().includes(lowerCaseQuery)
      );
    }
  }
})