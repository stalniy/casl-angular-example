import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AbilityModule } from '@casl/angular';
import { Ability } from '@casl/ability';

import { createAbility } from '../services/ability';
import { AppComponent } from './app.component';
import { TodoForm } from './todo/form.component';
import { TodoList } from './todo/list.component';
import { TodoFooter } from './todo/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoForm,
    TodoList,
    TodoFooter,
  ],
  imports: [
    BrowserModule,
    AbilityModule.forRoot(),
    FormsModule
  ],
  providers: [
    { provide: Ability, useFactory: createAbility }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
