import { Component, Input } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";
@Component({
    selector:"app-task",
    templateUrl:"./task.component.html",
    imports:[TasksComponent],
    styleUrl:"./task.component.css",
    standalone:true,
})

export class TaskComponent {
    @Input() name!:string;
}