import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck{
  public imageUrl: string = "./assets/icons/Vector.svg";
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('taskListItem') || "[]") || [];
    
  constructor(){}

  ngOnInit(): void {
      
  }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => {
      return Number(first.checked) - Number(last.checked);
    })

    this.saveLocalStorage();
  }

  deleteItemTaskList(event: number): void{
    this.taskList.splice(event, 1)
  }

  deleteAllItensTaksList(): void{
    const confirm = window.confirm("Você seja apagar todos ? ");
    confirm ? this.taskList = [] : "";
  }

  getTaskItem(event: TaskList){
    this.taskList.push(event);
  }


  public validationImput(taskItem: string, index: number){
    if(!taskItem.length){
      const confirm = window.confirm("task está vazia, deseja Deleta ?");

      confirm ? this.deleteItemTaskList(index) : "";
    }
  }

  saveLocalStorage(){
    if(this.taskList.length){
      localStorage.setItem("taskListItem", JSON.stringify(this.taskList));
    }
  }
}
