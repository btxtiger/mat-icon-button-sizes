import { Directive, ElementRef } from '@angular/core';

@Directive({
   selector: 'button[mat-large-icon-button]',
})
export class MatLargeIconButtonDirective {
   constructor(private elementRef: ElementRef) {
      elementRef.nativeElement.classList.add('mat-large-icon-button');
   }
}

@Directive({
   selector: 'button[mat-medium-icon-button]',
})
export class MatMediumIconButtonDirective {
   constructor(private elementRef: ElementRef) {
      elementRef.nativeElement.classList.add('mat-medium-icon-button');
   }
}

@Directive({
   selector: 'button[mat-small-icon-button]',
})
export class MatSmallIconButtonDirective {
   constructor(private elementRef: ElementRef) {
      elementRef.nativeElement.classList.add('mat-small-icon-button');
   }
}

@Directive({
   selector: 'button[mat-tiny-icon-button]',
})
export class MatTinyIconButtonDirective {
   constructor(private elementRef: ElementRef) {
      elementRef.nativeElement.classList.add('mat-tiny-icon-button');
   }
}
