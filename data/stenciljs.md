---
id: 892f4d1d-0b9d-4f9b-945d-acab5e982bf2
title: Stencil.js
keywords: ["stencil.js"]
description: A cheatsheet for Stencil.js
---

Table of contents
[[toc]]

## Creating a component

To create a new component, use the `@Component()` decorator to provide metadata such as the tag name, style, and template:

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return <div>Hello, World!</div>;
  }
}
```

## Using props

To pass data to a component, use the `@Prop()` decorator to declare a property:

```tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-greeting',
  shadow: true,
})
export class MyGreeting {
  @Prop() name: string;

  render() {
    return <div>Hello, {this.name}!</div>;
  }
}
```

To use the component in HTML, pass the prop as an attribute:

```html
<my-greeting name="Stencil"></my-greeting>
```

## Using state

To manage the internal state of a component, use the `@State()` decorator to declare a state variable:

```tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-counter',
  shadow: true,
})
export class MyCounter {
  @State() count = 0;

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
```

## Using events

To communicate with the outside world, use the `@Event()` decorator to declare a custom event:

```tsx
import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button',
  shadow: true,
})
export class MyButton {
  @Event() clicked: EventEmitter;

  handleClick = () => {
    this.clicked.emit();
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

To listen to the custom event in HTML, use the `on` prefix followed by the event name in camelCase:

```html
<my-button onclicked="handleClick"></my-button>
<script>
  function handleClick() {
    alert('Button clicked!');
  }
</script>
```

## Using slots

To allow content projection in a component, use the `<slot>` element to define a placeholder for the content:

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  shadow: true,
})
export class MyCard {
  render() {
    return (
      <div class="card">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    );
  }
}
```

To use the component in HTML, pass the content as children and use the `slot` attribute to assign them to different slots:

```html
<my-card>
  <h1 slot="header">My Card</h1>
  <p>This is some content.</p>
  <button slot="footer">OK</button>
</my-card>
```

## Using lifecycle hooks

To execute code at different stages of a component's lifecycle, use the following methods:

- `connectedCallback`: Called when the component is connected to the DOM.
- `disconnectedCallback`: Called when the component is disconnected from the DOM.
- `componentWillLoad`: Called once before the first render.
- `componentDidLoad`: Called once after the first render.
- `componentWillUpdate`: Called before each subsequent render.
- `componentDidUpdate`: Called after each subsequent render.
- `componentShouldUpdate`: Called before each subsequent render and can be used to prevent rendering.

For example:

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-lifecycle',
})
export class MyLifecycle {
  connectedCallback() {
    console.log('Connected');
  }

  disconnectedCallback() {
    console.log('Disconnected');
  }

  componentWillLoad() {
    console.log('Will load');
  }

  componentDidLoad() {
    console.log('Did load');
  }

  componentWillUpdate() {
    console.log('Will update');
  }

  componentDidUpdate() {
    console.log('Did update');
  }

  componentShouldUpdate() {
    console.log('Should update');
    return true;
  }

  render() {
    return <div>My Lifecycle</div>;
  }
}
```

## Using watch

To react to changes in props or state, use the `@Watch()` decorator to declare a watch handler:

```tsx
import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-timer',
  shadow: true,
})
export class MyTimer {
  @Prop() duration: number;
  @State() timeLeft: number;
  timerId: any;

  @Watch('duration')
  durationChanged(newValue: number) {
    // Reset the timer when the duration prop changes
    this.stopTimer();
    this.timeLeft = newValue;
    this.startTimer();
  }

  startTimer = () => {
    // Start a countdown timer
    this.timerId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  };

  stopTimer = () => {
    // Stop the timer and clear the interval
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  };

  componentWillLoad() {
    // Initialize the time left with the duration prop
    this.timeLeft = this.duration;
  }

  componentDidLoad() {
    // Start the timer when the component loads
    this.startTimer();
  }

  disconnectedCallback() {
    // Stop the timer when the component unloads
    this.stopTimer();
  }

  render() {
    return <div>{this.timeLeft} seconds left</div>;
  }
}
```

## Using methods

To expose public methods that can be called by other components or scripts, use the `@Method()` decorator to declare a method:

```tsx
import { Component, h, Method } from '@stencil/core';

@Component({
  tag: 'my-modal',
  shadow: true,
})
export class MyModal {
  modal: HTMLDivElement;

  @Method()
  async open() {
    // Show the modal
    this.modal.style.display = 'block';
  }

  @Method()
  async close() {
    // Hide the modal
    this.modal.style.display = 'none';
  }

  render() {
    return (
      <div
        class="modal"
        ref={(el) => (this.modal = el as HTMLDivElement)}
        style={{ display: 'none' }}
      >
        <div class="content">
          <slot></slot>
          <button onClick={this.close}>Close</button>
        </div>
      </div>
    );
  }
}
```

To use the component in HTML, get a reference to the component element and call its methods:

```html
<my-modal id="myModal">
  <p>This is a modal.</p>
</my-modal>
<button id="openBtn">Open</button>
<script>
  const myModal = document.getElementById('myModal');
  const openBtn = document.getElementById('openBtn');

  openBtn.addEventListener('click', () => {
    myModal.open();
  });
</script>
```

## Using host data

To provide data and attributes to the host element of a component, use the `hostData()` method to return an object:

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
})
export class MyTooltip {
  message: string;

  handleMouseEnter = (event: MouseEvent) => {
    // Get the message from the data-tooltip attribute
    const target = event.target as HTMLElement;
    this.message = target.dataset.tooltip;
  };

  handleMouseLeave = () => {
    // Clear the message
    this.message = '';
  };

  hostData() {
    return {
      // Add event listeners to the host element
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      // Add a class to the host element based on the state
      class: { 'has-tooltip': !!this.message },
    };
  }

  render() {
    return [
      // Render a slot for the content
      <slot></slot>,
      // Render a span for the tooltip message
      <span class="tooltip">{this.message}</span>,
    ];
  }
}
```

To use the component in HTML, wrap any element with the `<my-tooltip>` tag and use the `data-tooltip` attribute to provide the message:

```html
<my-tooltip>
  <button data-tooltip="Click me">Hover me</button>
</my-tooltip>
```
