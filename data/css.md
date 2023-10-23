---
id: 544e99c7-6452-4320-a535-43425bde06cc
title: CSS
description: A cheatsheet for CSS
keywords: ["css"]
---

Table of Contents
[[toc]]

# Selectors

| Selector | Example | Description |
| --- | --- | --- |
| .class | .intro | Selects all elements with class="intro" |
| #id | #firstname | Selects the element with id="firstname" |
| element | p | Selects all <p> elements |
| element.class | p.intro | Selects all <p> elements with class="intro" |
| element,element | div,p | Selects all <div> and <p> elements |
| element element | div p | Selects all <p> elements inside <div> elements |
| element > element | div > p | Selects all <p> elements where the parent is a <div> element |
| element + element | div + p | Selects the first <p> element that is placed immediately after a <div> element |
| element ~ element | p ~ ul | Selects every <ul> element that is preceded by a <p> element |
| [attribute] | [target] | Selects all elements with a target attribute |
| [attribute=value] | [target="_blank"] | Selects all elements with target="_blank" |
| [attribute~=value] | [title~="flower"] | Selects all elements with a title attribute containing the word "flower" |
| [attribute|=value] | [lang|="en"] | Selects all elements with a lang attribute value equal to "en" or starting with "en-" |
| [attribute^=value] | a[href^="https"] | Selects every <a> element whose href attribute value begins with "https" |
| [attribute$=value] | a[href$=".pdf"] | Selects every <a> element whose href attribute value ends with ".pdf" |
| [attribute*=value] | a[href*="w3schools"] | Selects every <a> element whose href attribute value contains the substring "w3schools" |
| :active | a:active | Selects the active link |
| ::after | p::after | Inserts something after the content of each <p> element |
| ::before | p::before | Inserts something before the content of each <p> element |
| :checked | input:checked | Selects every checked <input> element |
| :disabled | input:disabled | Selects every disabled <input> element |
| :empty | p:empty | Selects every <p> element that has no children (including text nodes) |
| :enabled

# Units

| Unit | Description | Example |
| ---- | ----------- | ------- |
| px | Pixels, an absolute unit that corresponds to one device pixel | `font-size: 16px;` |
| em | Relative to the font-size of the current element | `font-size: 1.2em;` |
| rem | Relative to the font-size of the root element | `font-size: 1.5rem;` |
| % | Relative to the parent element or the viewport | `width: 50%;` |
| vw | Relative to 1% of the width of the viewport | `width: 80vw;` |
| vh | Relative to 1% of the height of the viewport | `height: 50vh;` |
