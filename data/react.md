---
id: 8ff61974-5c20-49ca-a097-66c7f512a26d
title: React
description: A cheatsheet for React
---

Table of Contents
[[toc]]

# Importing React

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
```

# Creating a Component

```jsx
// Using a function
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

# Rendering a Component

```jsx
// In a browser
ReactDOM.render(<Hello name="World" />, document.getElementById('root'));

// In a test
import { render, screen } from '@testing-library/react';
render(<Hello name="World" />);
expect(screen.getByText('Hello, World')).toBeInTheDocument();
```

# State

```jsx
// In a function component, using hooks
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

# Props

```jsx
// Passing props to a component
<Hello name="World" />

// Accessing props in a component
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using default props
Hello.defaultProps = {
  name: 'Stranger',
};

// Using prop types
import PropTypes from 'prop-types';

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
```

# Lifecycle Methods

```jsx
// In a function component, using useEffect hook
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0); // initial state is 0

  useEffect(() => {
    // runs after every render
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000); // start a timer
    return () => clearInterval(interval); // clean up the timer on unmount
  }, []); // pass an empty array to run only once on mount

  return <div>Seconds: {seconds}</div>;
}
```

# Hooks

```jsx
// Using useState to manage state in a function component
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Using useEffect to perform side effects in a function component
import { useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0); // initial state is 0

  useEffect(() => {
    // runs after every render
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000); // start a timer
    return () => clearInterval(interval); // clean up the timer on unmount
  }, []); // pass an empty array to run only once on mount

  return <div>Seconds: {seconds}</div>;
}

// Using custom hooks to reuse logic in multiple components
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null); // initial state is null
  const [loading, setLoading] = useState(true); // initial state is true
  const [error, setError] = useState(null); // initial state is null

  useEffect(() => {
    // runs once on mount
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // set the data
        setLoading(false); // set the loading to false
      })
      .catch((error) => {
        setError(error); // set the error
        setLoading(false); // set the loading to false
      });
  }, [url]); // pass the url as a dependency

  return { data, loading, error }; // return an object with the state values
}

function Users() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users'); // use the custom hook with a url

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

# Context

```jsx
// Creating a context object
import { createContext } from 'react';

const ThemeContext = createContext('light'); // default value is 'light'

// Providing the context value to the component tree
import { ThemeContext } from './theme-context';

function App() {
  const [theme, setTheme] = useState('light'); // initial state is 'light'

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// Consuming the context value in a component
import { ThemeContext } from './theme-context';

function Header() {
  const theme = useContext(ThemeContext); // get the current theme from the context

  return (
    <div className={`header ${theme}`}>
      <h1>React App</h1>
    </div>
  );
}
```

# Refs

```jsx
// Creating a ref object
import { useRef } from 'react';

function Input() {
  const inputRef = useRef(null); // initial value is null

  return (
    <div>
      <input type="text" ref={inputRef} /> // assign the ref to the input element
      <button onClick={() => inputRef.current.focus()}>Focus</button> // access the current property of the ref to call the focus method
    </div>
  );
}
```

# Fragments

```jsx
// Using fragments to return multiple elements without a wrapper
import { Fragment } from 'react';

function List(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

// Using a short syntax for fragments
function List(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
```
