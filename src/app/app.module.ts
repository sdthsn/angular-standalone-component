import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, BookListComponent],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
