import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-deleted-records',
  templateUrl: './deleted-records.component.html',
  styleUrls: ['./deleted-records.component.scss']
})
export class DeletedRecordsComponent implements OnInit {


  rows: any = [];
  ColumnMode = ColumnMode;

  constructor() {
  }

  ngOnInit(): void {
    const deletedItems = localStorage.getItem('deleted-todos') || '[]';
    this.rows = JSON.parse(deletedItems);
  }


}
