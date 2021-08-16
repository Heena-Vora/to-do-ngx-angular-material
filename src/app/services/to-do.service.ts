import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Todo {
  id?: any;
  created?: number;
  title: string;
  description: string;
}

@Injectable()
export class TodoService {
  private todosBs = new BehaviorSubject<Todo[]>([]);
  private dataStore: { todos: Todo[] } = { todos: [] };
  readonly todos = this.todosBs.asObservable();
  allTodos = localStorage.getItem('todos');


  constructor() { }

  getAllToDos() {
    if (this.allTodos) {
      this.dataStore.todos = JSON.parse(this.allTodos);
      this.updateStore();
    }
  }

  updateById(todo: Todo) {
    let notFound = true;

    this.dataStore.todos.forEach((item, index) => {
      if (item.id === todo.id) {
        this.dataStore.todos[index] = todo;
        notFound = false;
      }
    });

    if (notFound) {
      this.dataStore.todos.push(todo);
    }
    this.updateStore();
  }

  create(todo: Todo) {
    this.dataStore.todos.push(todo);
    this.updateStore();
  }

  update(todo: Todo) {
    this.dataStore.todos.forEach((t, i) => {
      if (t.id === todo.id) { this.dataStore.todos[i] = todo; }
    });
    this.updateStore();
  }

  remove(todoId: number) {
    this.dataStore.todos.forEach((t, i) => {
      if (t.id === todoId) { this.dataStore.todos.splice(i, 1); this.updateDeletedRecords(t);  }
    });
    this.updateStore();
  }

  updateStore() {
    this.todosBs.next(Object.assign({}, this.dataStore).todos);
    localStorage.setItem('todos', JSON.stringify(this.dataStore.todos));
  }

  updateDeletedRecords(delTodo: Todo) {
    const deletedItems = localStorage.getItem('deleted-todos') || '[]';
    const deletedElems = JSON.parse(deletedItems);
    deletedElems.push(delTodo);
    localStorage.setItem('deleted-todos', JSON.stringify(deletedElems));
  }
}
