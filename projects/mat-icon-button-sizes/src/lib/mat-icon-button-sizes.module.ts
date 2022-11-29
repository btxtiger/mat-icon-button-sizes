import { NgModule } from '@angular/core';
import {
   MatLargeIconButtonDirective,
   MatMediumIconButtonDirective,
   MatSmallIconButtonDirective,
   MatTinyIconButtonDirective,
} from './mat-icon-button-sizes.directive';

@NgModule({
   declarations: [
      MatLargeIconButtonDirective,
      MatMediumIconButtonDirective,
      MatSmallIconButtonDirective,
      MatTinyIconButtonDirective,
   ],
   imports: [],
   exports: [MatLargeIconButtonDirective, MatMediumIconButtonDirective, MatSmallIconButtonDirective, MatTinyIconButtonDirective],
})
export class MatIconButtonSizesModule {}
