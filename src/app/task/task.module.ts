import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponents } from "./task.component";
import { NewTask } from "./new-task/newtask.component";
import { sharedModule } from "../shared-component-card/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[TaskComponents,TasksComponent,NewTask],
    exports:[TaskComponents],
    imports:[sharedModule,FormsModule,CommonModule]

})
export class TaskModule {

}