import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="todoapp">
      <header class="header">
        <h1>{{ title }}</h1>
        <todo-form (newTodo)="addTodo($event)" *ngIf="'Todo' | can: 'create'"></todo-form>
      </header>
      <section class="main">
        <todo-list [items]="todos" (remove)="removeTodo($event)"></todo-list>
      </section>
      <todo-footer [items]="todos"></todo-footer>
    </section>
  `,
  styles: [`
    app-root {
      display: block;
    }

    .todoapp {
      background: #fff;
      margin: 130px 0 40px 0;
      position: relative;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                  0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }

    .todoapp h1 {
      position: absolute;
      top: -190px;
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      text-align: center;
      color: rgba(175, 47, 47, 0.15);
      -webkit-text-rendering: optimizeLegibility;
      -moz-text-rendering: optimizeLegibility;
      text-rendering: optimizeLegibility;
    }

    .new-todo input,
    .new-todo select,
    .edit {
      position: relative;
      margin: 0;
      width: 100%;
      font-size: 24px;
      font-family: inherit;
      font-weight: inherit;
      line-height: 1.4em;
      border: 0;
      color: inherit;
      padding: 6px;
      border: 1px solid #999;
      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .main {
      position: relative;
      z-index: 2;
      border-top: 1px solid #e6e6e6;
    }
    label[for='toggle-all'] {
      display: none;
    }


    .clear-completed,
    html .clear-completed:active {
      float: right;
      position: relative;
      line-height: 20px;
      text-decoration: none;
      cursor: pointer;
    }
    .clear-completed:hover {
      text-decoration: underline;
    }
    .info {
      margin: 65px auto 0;
      color: #bfbfbf;
      font-size: 10px;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
      text-align: center;
    }
    .info p {
      line-height: 1;
    }
    .info a {
      color: inherit;
      text-decoration: none;
      font-weight: 400;
    }
    .info a:hover {
      text-decoration: underline;
    }
    /*
      Hack to remove background from Mobile Safari.
      Can't use it globally since it destroys checkboxes in Firefox
    */
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      .toggle-all,
      .todo-list li .toggle {
        background: none;
      }
      .todo-list li .toggle {
        height: 40px;
      }
      .toggle-all {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-appearance: none;
        appearance: none;
      }
    }
    @media (max-width: 430px) {
      .footer {
        height: 50px;
      }
      .filters {
        bottom: 10px;
      }
    }
  `]
})
export class AppComponent {
  title = 'Todos';
  todos = [];

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
