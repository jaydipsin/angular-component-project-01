import { Component, Input } from "@angular/core";
@Component({
    selector:"app-task",
    templateUrl:"./task.component.html",
    styleUrl:"./task.component.css",
    standalone:true,
})

export class TaskComponent {
    @Input() name!:string;
}