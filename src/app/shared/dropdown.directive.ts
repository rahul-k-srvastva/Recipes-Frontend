import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}





// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding("class.open") openDropdown = false;

//   @HostListener("click") dropdown(eventData:Event){
//     this.openDropdown = !this.openDropdown;

    // if(this.openDropdown){
    //   this.renderer.addClass(this.elementRef.nativeElement,"open");
    // }else{
    //   this.renderer.removeClass(this.elementRef.nativeElement,"open");
    // }      
  // }
  // constructor(private elementRef:ElementRef ,private renderer : Renderer2) { }
// }
