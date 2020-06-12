import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task' ;



@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  object: Task;
  operation = 'view';

  constructor() {
  }

  ngOnInit(): void {

    this.object = new Task('R0001', 'Frank Kolar',
    'This is my user record', new Date());
  }
}

