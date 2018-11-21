import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMenuChange]'
})
export class MenuChangeDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
