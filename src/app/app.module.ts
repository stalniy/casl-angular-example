import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AbilityModule } from '@casl/angular';
import { Ability } from '@casl/ability';

import { defineAbilitiesFor, createAbility } from '../services/ability';
import { AppRoutingModule } from './routing.module';
import App from './app.component';
import TodoForm from './todo/form.component';
import TodoList from './todo/list.component';
import TodoFooter from './todo/footer.component';

@NgModule({
  declarations: [
    App,
    TodoForm,
    TodoList,
    TodoFooter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbilityModule.forRoot(),
    FormsModule
  ],
  providers: [
    { provide: Ability, useFactory: createAbility }
  ],
  bootstrap: [App]
})
export class AppModule { }
