import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    // @Output() featureSelected = new EventEmitter<string>();
    collapsed = true;

    // onSelect(event){
    //     this.featureSelected.emit(event.target.innerText);   
    // }
}