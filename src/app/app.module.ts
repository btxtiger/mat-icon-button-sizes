import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMdIconModule } from 'ngx-md-icon';
import { MatIconButtonSizesModule } from '../../projects/mat-icon-button-sizes/src/lib/mat-icon-button-sizes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatIconButtonSizesModule,
      NgxMdIconModule,
      MatDividerModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
