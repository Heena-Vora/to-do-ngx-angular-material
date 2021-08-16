import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent {

  todoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ToDoAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.todoForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 1000)],
      created: [new Date().toISOString()],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      return;
    }
    this.todoService.create(this.todoForm.value);
    this.todoForm.reset();
    this.closeDialog();
  }
}
