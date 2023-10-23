---
id: 8f3ae116-d75b-46ce-8c2f-e1a694d1dcde
title: Vue.js
keywords: ["vue", "vue.js"]
description: A cheatsheet for Vue.js
---

Table of contents
[[toc]]

## Creating an App

```js
// Import the createApp function from vue
import { createApp } from 'vue'

// Create a root component
const App = {
  template: `<h1>Hello, Vue!</h1>`
}

// Create a vue app instance
const app = createApp(App)

// Mount the app to a DOM element
app.mount('#app')
```

## Data and Methods

```js
// Define data and methods in the setup function
import { ref } from 'vue'

const App = {
  setup() {
    // Use ref to create reactive data
    const message = ref('Hello, Vue!')

    // Define a method
    const reverseMessage = () => {
      message.value = message.value.split('').reverse().join('')
    }

    // Return the data and methods to the template
    return {
      message,
      reverseMessage
    }
  },
  template: `
    <div>
      <p>{{ message }}</p>
      <button @click="reverseMessage">Reverse Message</button>
    </div>
  `
}
```

## Computed Properties and Watchers

```js
// Use computed and watch from vue to create computed properties and watchers
import { computed, watch } from 'vue'

const App = {
  setup() {
    // Use computed to create a reactive computed property
    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })

    // Use watch to create a watcher on a reactive data source
    watch(firstName, (newValue, oldValue) => {
      console.log('First name changed from', oldValue, 'to', newValue)
    })

    return {
      firstName,
      lastName,
      fullName
    }
  },
  template: `
    <div>
      <p>First name: <input v-model="firstName"></p>
      <p>Last name: <input v-model="lastName"></p>
      <p>Full name: {{ fullName }}</p>
    </div>
  `
}
```

## Components and Props

```js
// Use defineComponent and props from vue to create components and props
import { defineComponent, props } from 'vue'

// Define a child component
const Child = defineComponent({
  // Define props with validation and default values
  props: {
    message: {
      type: String,
      required: true,
      default: 'Hello, Vue!'
    }
  },
  template: `<p>{{ message }}</p>`
})

// Define a parent component that uses the child component
const Parent = defineComponent({
  // Register the child component locally
  components: {
    Child
  },
  template: `
    <div>
      <child message="Hello, World!"></child>
      <child></child>
    </div>
  `
})
```

## Conditional Rendering and List Rendering

```js
// Use v-if, v-else, v-else-if, v-show, v-for and key from vue to control rendering logic
import { ref } from 'vue'

const App = defineComponent({
  setup() {
    // Use ref to create reactive data
    const show = ref(true)
    const items = ref(['Apple', 'Banana', 'Cherry'])

    // Return the data to the template
    return {
      show,
      items
    }
  },
  template: `
    <div>
      <!-- Use v-if, v-else and v-else-if to conditionally render elements -->
      <h1 v-if="show">Hello, Vue!</h1>
      <h2 v-else-if="!show">Goodbye, Vue!</h2>
      <h3 v-else>What are you doing here?</h3>

      <!-- Use v-show to toggle visibility of an element -->
      <button v-show="show" @click="show = false">Hide</button>

      <!-- Use v-for and key to render a list of items -->
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  `
})
```

## Event Handling and Forms

```js
// Use v-on or @ to bind event listeners and v-model to bind form inputs
import { ref } from 'vue'

const App = defineComponent({
  setup() {
    // Use ref to create reactive data
    const name = ref('')
    const email = ref('')

    // Define a method to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault()
      alert(`Name: ${name.value}, Email: ${email.value}`)
    }

    // Return the data and method to the template
    return {
      name,
      email,
      handleSubmit
    }
  },
  template: `
    <div>
      <!-- Use v-on or @ to bind event listeners -->
      <form @submit="handleSubmit">
        <!-- Use v-model to bind form inputs -->
        <p>Name: <input v-model="name"></p>
        <p>Email: <input v-model="email"></p>
        <p><button type="submit">Submit</button></p>
      </form>
    </div>
  `
})
```

## Lifecycle Hooks

```js
// Use onMounted, onUpdated, onUnmounted and other hooks from vue to access lifecycle hooks
import { onMounted, onUpdated, onUnmounted } from 'vue'

const App = defineComponent({
  setup() {
    // Use onMounted to execute code when the component is mounted
    onMounted(() => {
      console.log('Component mounted')
    })

    // Use onUpdated to execute code when the component is updated
    onUpdated(() => {
      console.log('Component updated')
    })

    // Use onUnmounted to execute code when the component is unmounted
    onUnmounted(() => {
      console.log('Component unmounted')
    })
  },
  template: `<h1>Hello, Vue!</h1>`
})
```
