import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{
  @Output() sendTaskItem = new EventEmitter<TaskList>();
  public taskItem: string = "";

  constructor(){}
  ngOnInit(): void {
    
  }

  configureTaskItem():void{
    if(this.taskItem.trim() && this.taskItem.length){
      this.taskItem = this.taskItem.trim();
      this.sendTask();    
    }
    this.taskItem = "";
  }

  sendTask(): void{
    const task: TaskList = {task: this.taskItem, checked: false}
    this.sendTaskItem.emit(task)
    this.taskItem = "";
  }
}
