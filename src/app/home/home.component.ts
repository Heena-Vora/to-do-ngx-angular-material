import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../services/to-do.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  todos$ = new Observable<Todo[]>();
  editing: any = {};
  rows: any = [];

  ColumnMode = ColumnMode;

  constructor(private todoService: TodoService) {
    this.todoService.getAllToDos();
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos;
    this.todos$.subscribe((todos) => {
      this.rows = todos;
      this.rows = [...this.rows];
    });
  }

  updateValue(event: any, rowIndex: number, cell: string) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    this.todoService.update(this.rows[rowIndex]);
  }

  deleteRow(row: Todo, rowIndex: number) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      this.rows = this.rows.splice(rowIndex, 1);
      this.rows = [...this.rows];
      this.todoService.remove(row.id);
    }
  }

  updateRow(row: any, rowIndex: number) {
    this.rows[rowIndex] = row;
    this.rows = [...this.rows];
    this.todoService.updateById(row);
  }

}
