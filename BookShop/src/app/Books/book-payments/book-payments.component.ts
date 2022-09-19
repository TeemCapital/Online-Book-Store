import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-payments',
  templateUrl: './book-payments.component.html',
  styleUrls: ['./book-payments.component.scss']
})
export class BookPaymentsComponent implements OnInit {
  books:any;
  value:any;
  FinalPrice!:number;
  bookedAlert:boolean=false;
  purchased:boolean=false;
  constructor(private bookSer:BooksService,private router:Router) { }

  ngOnInit(): void {
    this.books=this.bookSer.bookPayments;
    this.value=this.bookSer.booksQuantity;
    this.FinalPrice=this.value * this.books.price;
    console.log(this.FinalPrice)
    console.log('compoenet launched')

  }
  booked(){
    this.bookedAlert=true;
    setTimeout(() => {
      this.bookedAlert=false
    }, 2000);
    this.purchased=true;
  }
  remove(){
    this.bookSer.bookPayments=[]
    this.bookSer.booksQuantity=0;
  }

}
