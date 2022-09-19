import { BooksComponent } from './books/books.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookPaymentsComponent } from './book-payments/book-payments.component';



const booksRoute:Routes=[
{path:'books',component:BooksComponent},
{path:'books/:id',component:BookDetailsComponent},
{path:'book-payment',component:BookPaymentsComponent}
]
@NgModule({
  imports:[RouterModule.forChild(booksRoute)],
  exports:[RouterModule]
})
export class booksRoutingModule{}
