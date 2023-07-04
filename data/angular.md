---
id: de7e5729-81e3-4936-9210-f15aed5e5967
title: Angular
description: A cheatsheet for Angular
---

# Components

- A component is a class with a template and a decorator that defines its metadata.
- To create a component, use the `@Component` decorator and provide a selector, a template or a templateUrl, and optionally other properties such as styles or styleUrls.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello', // the element name to use in templates
  template: '<h1>Hello {{name}}</h1>', // the inline template
  // or templateUrl: './hello.component.html', // the external template file
  styles: ['h1 { color: red; }'], // the inline styles
  // or styleUrls: ['./hello.component.css'], // the external styles file
})
export class HelloComponent {
  name = 'Angular'; // the component property
}
```

- To use a component in another component’s template, declare it in the NgModule’s declarations array or import its module.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, // declare the component
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

# Data Binding

- Data binding is a way to communicate data between a component class and its template.
- There are four types of data binding in Angular:
  - Interpolation: {{value}} - inserts the value of a component property into the template.
  - Property binding: [property]=“value” - sets the value of a property of an element or a directive.
  - Event binding: (event)=“handler($event)” - executes a method of the component when an event occurs on an element or a directive.
  - Two-way binding: [(ngModel)]=“value” - binds the value of a form element to a component property and updates both when either changes.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <p>Current value: {{count}}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <input [(ngModel)]="name" />
    <p>Hello {{name}}</p>
  `,
})
export class CounterComponent {
  count = 0; // component property
  name = ''; // component property

  increment() {
    // component method
    this.count++;
  }

  decrement() {
    // component method
    this.count--;
  }
}
```

# Directives

- A directive is a class with a decorator that defines its metadata and logic.
- There are three types of directives in Angular:
  - Components: directives with templates, as described above.
  - Structural directives: directives that can add or remove elements from the DOM, such as *ngIf, *ngFor, or *ngSwitch.
  - Attribute directives: directives that can change the appearance or behavior of an element, such as ngClass, ngStyle, or ngModel.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <h1>Todos</h1>
    <ul>
      <li *ngFor="let todo of todos; index as i">
        {{i + 1}}. {{todo}}
        <input type="checkbox" [(ngModel)]="done[i]" />
        <span [ngClass]="{ done: done[i] }">Done</span>
      </li>
    </ul>
    <p [ngStyle]="{ color: 'green' }">This is green</p>
  `,
  styles: [
    `
      .done {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodosComponent {
  todos = ['Learn Angular', 'Build an app', 'Deploy to Firebase']; // component property
  done = [false, false, false]; // component property
}
```

# Services

- A service is a class that provides some functionality to other parts of the application, such as fetching data, logging, authentication, etc.
- To create a service, use the `@Injectable` decorator and provide it in the root injector or in a specific module or component.

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // provide in the root injector
})
export class DataService {
  constructor(private http: HttpClient) {} // inject HttpClient

  getData() {
    // service method
    return this.http.get('https://jsonplaceholder.typicode.com/posts'); // return an observable
  }
}
```

- To use a service in a component or another service, inject it in the constructor and call its methods.

```ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  template: `
    <h1>Data</h1>
    <ul>
      <li *ngFor="let post of posts">{{post.title}}</li>
    </ul>
  `,
})
export class DataComponent implements OnInit {
  posts: any[]; // component property

  constructor(private dataService: DataService) {} // inject DataService

  ngOnInit() {
    // lifecycle hook
    this.dataService.getData().subscribe((data) => {
      // subscribe to the observable
      this.posts = data; // assign the data to the component property
    });
  }
}
```

# Routing

- Routing is a way to navigate between different views of the application based on the URL.
- To enable routing, import the RouterModule and provide a routes array that maps paths to components.

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  // routes array
  { path: '', component: HomeComponent }, // map the root path to HomeComponent
  { path: 'about', component: AboutComponent }, // map the about path to AboutComponent
  { path: 'contact', component: ContactComponent }, // map the contact path to ContactComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // import the RouterModule with the routes
  exports: [RouterModule], // export the RouterModule
})
export class AppRoutingModule {}
```

- To display the routed component, use the `<router-outlet>` element in the template.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Routing</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
    </nav>
    <router-outlet></router-outlet> <!-- display the routed component here -->
  `,
})
export class AppComponent {}
```

- To navigate programmatically, inject the Router service and call its navigate method.

```ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home</h2>
    <p>Welcome to Angular Routing</p>
    <button (click)="goToAbout()">Go to About</button>
  `,
})
export class HomeComponent {
  constructor(private router: Router) {} // inject Router

  goToAbout() {
    // component method
    this.router.navigate(['/about']); // navigate to the about path
  }
}
```
