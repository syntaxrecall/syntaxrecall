---
id: 138147cb-5a5e-42bc-9399-1b9aff2b1bb1
title: Solid.js
keywords: ["solid.js"]
description: A cheatsheet for Solid.js
---

Table of contents
[[toc]]

SolidJS is a declarative, efficient, and flexible JavaScript library for building user interfaces¹. It uses a compiler to generate reactive code without using a virtual DOM². This cheatsheet covers some of the basic concepts and syntax of SolidJS.

## Signals

Signals are the most basic reactive primitive. They track a single value that changes over time¹. To create a signal, use the `createSignal` function:

```js
import { createSignal } from "solid-js";

// create a signal with an initial value
const [count, setCount] = createSignal(0);

// read the signal's current value
console.log(count()); // 0

// write the signal's new value
setCount(1);
console.log(count()); // 1

// write the signal's new value based on the previous value
setCount(prev => prev + 1);
console.log(count()); // 2
```

To use signals in JSX expressions, wrap them with curly braces:

```jsx
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}
```

## Effects

Effects are functions that run whenever their dependencies change. They are useful for performing side effects, such as manipulating the DOM, fetching data, or logging to the console¹. To create an effect, use the `createEffect` function:

```js
import { createSignal, createEffect } from "solid-js";

const [name, setName] = createSignal("Alice");

// create an effect that logs the name to the console
createEffect(() => {
  console.log(name());
});

// change the name and trigger the effect
setName("Bob"); // logs "Bob" to the console
```

To use effects in JSX components, wrap them with curly braces:

```jsx
import { createSignal, createEffect } from "solid-js";

function Greeting() {
  const [name, setName] = createSignal("Alice");

  // create an effect that updates the document title
  createEffect(() => {
    document.title = `Hello, ${name()}!`;
  });

  return (
    <div>
      <p>Hello, {name}!</p>
      <input type="text" value={name()} onInput={e => setName(e.target.value)} />
    </div>
  );
}
```

## Computed Values

Computed values are functions that return a derived value based on their dependencies. They are useful for transforming or aggregating data without creating intermediate signals¹. To create a computed value, use the `createMemo` function:

```js
import { createSignal, createMemo } from "solid-js";

const [a, setA] = createSignal(1);
const [b, setB] = createSignal(2);

// create a computed value that returns the sum of a and b
const sum = createMemo(() => a() + b());

// read the computed value
console.log(sum()); // 3

// change the dependencies and update the computed value
setA(3);
setB(4);
console.log(sum()); // 7
```

To use computed values in JSX expressions, wrap them with curly braces:

```jsx
import { createSignal, createMemo } from "solid-js";

function Calculator() {
  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(2);

  // create a computed value that returns the sum of a and b
  const sum = createMemo(() => a() + b());

  return (
    <div>
      <p>
        {a} + {b} = {sum}
      </p>
      <input type="number" value={a()} onInput={e => setA(e.target.valueAsNumber)} />
      <input type="number" value={b()} onInput={e => setB(e.target.valueAsNumber)} />
    </div>
  );
}
```

## Resources

Resources are special signals that handle asynchronous data fetching and caching. They are useful for loading data from APIs or other sources¹. To create a resource, use the `createResource` function:

```js
import { createResource } from "solid-js";

// create a resource that fetches data from an API endpoint
const [data, load] = createResource(() =>
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
);

// read the resource's current value
console.log(data()); // null

// load the resource's data and update the value
load();
console.log(data()); // {userId: 1, id: 1, title: "delectus aut autem", completed: false}
```

To use resources in JSX components, wrap them with curly braces and use the `Suspense` and `ErrorBoundary` components to handle loading and error states:

```jsx
import { createResource } from "solid-js";

function Todo() {
  // create a resource that fetches data from an API endpoint
  const [data, load] = createResource(() =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
  );

  return (
    <div>
      <button onClick={load}>Load Todo</button>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <p>Todo: {data().title}</p>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
```

## Components

Components are functions that return JSX elements. They are useful for reusing and composing UI elements¹. To create a component, use the `Component` type and the `props` parameter:

```jsx
import { Component } from "solid-js";

// create a component that renders a greeting message
const Greeting: Component<{ name: string }> = props => {
  return <p>Hello, {props.name}!</p>;
};

// use the component in another component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

To use state or effects in a component, use the `createSignal`, `createEffect`, or other hooks inside the component function:

```jsx
import { Component, createSignal } from "solid-js";

// create a component that renders a counter with a button
const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};

// use the component in another component
function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}
```

## Rendering

To render a SolidJS component to the DOM, use the `render` function:

```jsx
import { render } from "solid-js/web";

function App() {
  return <h1>Hello, world!</h1>;
}

// render the App component to the element with id="root"
render(App, document.getElementById("root"));
```

To render a SolidJS component to a string for server-side rendering, use the `renderToString` function:

```jsx
import { renderToString } from "solid-js/web";

function App() {
  return <h1>Hello, world!</h1>;
}

// render the App component to a string
const html = renderToString(App);
console.log(html); // "<h1>Hello, world!</h1>"
```
