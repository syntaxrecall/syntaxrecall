---
id: 381dfd42-deb2-456f-97d9-54a924b95645
title: Lit
keywords: ["lit"]
description: A cheatsheet for Lit
---

Table of contents
[[toc]]

## Defining a component

To define a component, you need to extend the `LitElement` base class and use the `@customElement` decorator to register it with a tag name. You also need to import `LitElement` and `customElement` from the `lit` package.

```js
import {LitElement, customElement} from 'lit';

@customElement('my-element')
class MyElement extends LitElement {
  // component logic goes here
}
```

## Rendering a template

To render a template, you need to implement the `render()` method in your component class and return a `TemplateResult` object. You can use the `html` tag function from the `lit` package to create a template result from a template literal. You can also use expressions inside the template literal to insert dynamic values.

```js
import {LitElement, customElement, html} from 'lit';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <p>This is a Lit 3 component.</p>
    `;
  }
}
```

## Declaring reactive properties

To declare reactive properties, you need to use the `@property` decorator from the `lit/decorators.js` module and specify the property name and optionally some options. Reactive properties are automatically reflected to attributes and trigger a re-render when they change.

```js
import {LitElement, customElement, html} from 'lit';
import {property} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @property()
  name = 'World'; // default value

  @property({type: Number})
  count = 0; // specify type for attribute conversion

  @property({attribute: false})
  data = {}; // do not reflect to attribute

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <p>You have clicked ${this.count} times.</p>
      <button @click=${this.handleClick}>Click me</button>
    `;
  }

  handleClick() {
    this.count++; // update property and re-render
  }
}
```

## Handling events

To handle events, you need to use the `@eventOptions` decorator from the `lit/decorators.js` module and specify the event name and optionally some options. You can also use the `@query` decorator to access elements in your template by their selectors.

```js
import {LitElement, customElement, html} from 'lit';
import {eventOptions, query} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @query('#input')
  input; // reference to the input element

  render() {
    return html`
      <input id="input" type="text" />
      <button @click=${this.handleClick}>Submit</button>
    `;
  }

  @eventOptions({capture: true})
  handleClick(e) {
    console.log(this.input.value); // get input value
    console.log(e.target); // get event target
    console.log(e.currentTarget); // get event current target
    console.log(e.eventPhase); // get event phase
  }
}
```

## Styling a component

To style a component, you need to implement the `static styles` property in your component class and assign it a `CSSResultGroup` object. You can use the `css` tag function from the `lit` package to create a CSS result group from a template literal. You can also use expressions inside the template literal to insert dynamic values or shared styles.

```js
import {LitElement, customElement, html, css} from 'lit';

// define some shared styles
const sharedStyles = css`
  :host {
    display: block;
    font-family: sans-serif;
  }
`;

@customElement('my-element')
class MyElement extends LitElement {
  static styles = [
    sharedStyles,
    css`
      h1 {
        color: ${this.mainColor}; // use expression for dynamic value
      }

      p {
        font-size: 1.2rem;
      }
    `,
  ];

  static mainColor = 'blue'; // define a static property for style expression

  render() {
    return html`
      <h1>Hello, World!</h1>
      <p>This is a styled Lit 3 component.</p>
    `;
  }
}
```
