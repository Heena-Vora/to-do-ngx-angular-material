import { Component } from '@angular/core';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from './services/to-do.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To Do(s)';
  hasBackdrop: boolean = true;
  isExpanded: boolean = false;
  constructor(private dialog: MatDialog, private todoService: TodoService) {

  }
  topBarActions(eventOutput: any) {
    if (eventOutput.menu) {
      this.isExpanded = eventOutput.menu;
    }
  }
  openToDoForm() {
    const dialogRef = this.dialog.open(ToDoAddComponent, {
      width: '500px'
    });

  }
}
