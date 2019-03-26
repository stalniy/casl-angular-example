import { Component, Input } from '@angular/core';
import { Ability } from '@casl/ability';
import { defineAbilitiesFor } from '../../services/ability';

@Component({
  selector: 'todo-footer',
  template: `
    <footer class="footer" *ngIf="items.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong> left
      </span>
      <ul class="filters">
        <li class="help" title="Admin - can do anything. Member can read everything and manage todos with assignee 'me'">Switch roles</li>
        <li><a href="#" [class.selected]="role == 'admin'" (click)="setRole('admin')">Admin</a></li>
        <li><a href="#" [class.selected]="role == 'member'" (click)="setRole('member')">Member</a></li>
      </ul>
    </footer>
  `,
  styles: [`
    todo-footer {
      display: block;
    }

    .help {
      cursor: help;
    }

    .footer {
      color: #777;
      padding: 10px 15px;
      height: 20px;
      text-align: center;
      border-top: 1px solid #e6e6e6;
    }
    .footer:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                  0 8px 0 -3px #f6f6f6,
                  0 9px 1px -3px rgba(0, 0, 0, 0.2),
                  0 16px 0 -6px #f6f6f6,
                  0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    .todo-count {
      float: left;
      text-align: left;
    }
    .todo-count strong {
      font-weight: 300;
    }
    .filters {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      right: 0;
      left: 0;
    }
    .filters li {
      display: inline;
    }
    .filters li a {
      color: inherit;
      margin: 3px;
      padding: 3px 7px;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 3px;
    }
    .filters li a:hover {
      border-color: rgba(175, 47, 47, 0.1);
    }
    .filters li a.selected {
      border-color: rgba(175, 47, 47, 0.2);
    }
  `]
})
export default class TodoFooter {
  @Input() items = [];

  role = 'member';

  constructor(private ability: Ability) {}

  get remaining() {
    return this.items.filter(item => !item.completed).length;
  }

  setRole(name) {
    if (this.role !== name) {
      this.role = name;
      this.ability.update(defineAbilitiesFor(name))
    }
  }
}
