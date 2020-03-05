import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'todo-form',
  template: `
    <div class="new-todo">
      <input
        name="title"
        autofocus
        autocomplete="off"
        [placeholder]="placeholder"
        [(ngModel)]="newTodo.title"
        (keyup.enter)="addTodo()">

      <select name="assignee" [(ngModel)]="newTodo.assignee">
        <option value="" disabled i18n>Choose Assignee</option>
        <option>me</option>
        <option>John Doe</option>
        <option>Alex Pupkin</option>
      </select>
    </div>
  `,
  styles: [`
    todo-footer {
      display: block;
    }
    .new-todo input::-webkit-input-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }

    .new-todo input::-moz-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }

    .new-todo input::input-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }

    .new-todo {
      display: flex;
    }

    .new-todo [name=title] {
      flex: 1;
      padding-left: 60px;
    }

    .new-todo [name=assignee] {
      flex: 0 0 auto;
      padding-left: 10px;
    }

    .new-todo input,
    .new-todo select {
      padding: 16px 16px 16px 0;
      border: none;
      background: rgba(0, 0, 0, 0.003);
      box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
      width: auto;
    }

    .new-todo select {
      border-left: 2px solid #ccc;
    }
  `]
})
export class TodoForm {
  @Output('newTodo') onNewTodo = new EventEmitter();

  placeholder = 'What needs to be done?';
  newTodo = {
    title: '',
    assignee: ''
  };

  addTodo() {
    this.onNewTodo.emit({ ...this.newTodo, __typename: 'Todo' })
    this.newTodo.title = ''
    this.newTodo.assignee = ''
  }
}
