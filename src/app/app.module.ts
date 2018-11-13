import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgSelectModule} from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PapaParseModule } from 'ngx-papaparse';
import { AppComponent } from './app.component';
import { FilterPipe } from './util/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    PapaParseModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
