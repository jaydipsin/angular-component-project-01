import { Component, EventEmitter, Output } from "@angular/core";
@Component ({
    selector:"app-new-task",
    standalone:true,
    templateUrl:"./newtask.component.html",
    styleUrl:"./newtask.component.css",
})
export class NewTask{
    @Output()  hideModel = new EventEmitter<boolean>();
    onCancel(){
        this.hideModel.emit(false)
        // this.isDialog = !this.isDialog;
    }
}