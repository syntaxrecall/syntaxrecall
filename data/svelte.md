---
id: 4f34d826-b58b-459a-a949-e2e9da94d117
title: Svelte
keywords: ["svelte"]
description: A quick reference for Svelte
---

Table of contents
[[toc]]

## Components
<!-- Widget.svelte -->
```svelte
<script>
  export let textValue
</script>
<div class="container">
  {textValue}
</div>
<style>
  .container {
    color: blue;
  }
</style>
```

<!-- App.svelte -->
```svelte
<script>
  import Widget from './Widget.svelte'
  const title = 'App'
</script>
<header>
  {title}
</header>
<Widget textValue="I'm a svelte component" />
```

## Expressions
```svelte
<script>
  let isShowing = true
  let cat = 'cat'
  let user = {name: 'John Wick'}
  let email = 'professionalkiller@gmail.com'
</script>
<p>2 + 2 = {2 + 2}</p>
<p on:click={ () => isShowing = !isShowing}>
  {isShowing ? 'NOW YOU SEE ME 👀' : 'NOW YOU DON`T SEE ME 🙈'}
</p>
<p>My e-mail is {email}</p>
<p>{user.name}</p>
<p>{cat + `s`}</p>
<p>{`name ${user.name}`}</p>
```

## Bindings
<!-- MyLink.svelte -->
```svelte
<script>
  export let href = ''
  export let title = ''
  export let color = ''
</script>
<a href={href} style="color: {color}" >
  {title}
</a>
// Shorthand
<a {href} style="color: {color}" >
  {title}
</a>
```

```svelte
<script>
  import MyLink from "./components/MyLink";
  let link = {
    href: "[5]",
    title: "My Site",
    color: "#ff3300"
  };
</script>
<MyLink {...link} />
```

// Two-way binding
```svelte
<MyInput bind:value={value} />
// Shorthand
<MyInput bind:value />

<select multiple bind:value={fillings}>
  <option value="Rice"> Rice </option>
  <option value="Beans"> Beans </option>
  <option value="Cheese"> Cheese </option>
</select>

<input type="radio" bind:group={tortilla} value="Plain" />
<input type="radio" bind:group={tortilla} value="Whole wheat" />

<input type="checkbox" bind:group={fillings} value="Rice" />
<input type="checkbox" bind:group={fillings} value="Beans" />
```

// Element binding
```svelte
<script>
  let myDiv
</script>
<button on:click={ () => myDiv.innerText = 'My text'}>
  Click
</button>
<div bind:this={myDiv}/>
```

## Actions
```svelte
<script>
  function myFunction(node) {
    // the node has been mounted in the DOM
    return {
      destroy() {
        // the node has been removed from the DOM
      }
    };
  }
</script>
<div use:myFunction></div>
```

## Conditional rendering
```svelte
{#if condition}
  <p>Condition is true</p>
{:else if otherCondition}
  <p>OtherCondition is true</p>
{:else}
  <p>Any Condition is true</p>
{/if}

// Re render
{#key value}
  <div transition:fade>{value}</div>
{/key}
```

## Await blocks
```svelte
{#await promise}
  <p>waiting for the promise to resolve...</p>
{:then value}
  <p>The value is {value}</p>
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
```

## Render HTML
```svelte
<script>
  const myHtml = ' <span><strong> My text: </strong> text </span> '
</script>
{@html ' <div> Content </div> '}
{@html myHtml}
```

## Handle events
```svelte
<button on:click={handleClick}> Press me </button>
<button on:click={ () => console.log ('I was pressed')}>
  Press me
</button>
<button on:click|once={handleClick}> Press me </button>
<button on:submit|preventDefault={handleClick}> Press me </button>
```

## Forwarding events
// Widget.svelte
```svelte
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>
<button on:click={ () => dispatch ('message', { text: 'Hello!' })} />
<button on:click>Press me</button>
```

// App.svelte
```svelte
<script>
  import Widget from '.Widget.svelte'
</script>
<Widget on:click={ () => alert ('I was clicked')} on:message={e => alert (e.detail.text)}>
```
