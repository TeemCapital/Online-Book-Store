import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { BookPaymentsComponent } from './book-payments/book-payments.component';
import { booksRoutingModule } from './books-routing';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    BookPaymentsComponent
  ],
  imports: [
    CommonModule,
    booksRoutingModule,
    MatIconModule
  ]
})
export class BooksModule { }
