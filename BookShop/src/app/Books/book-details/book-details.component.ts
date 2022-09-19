import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  booksId:any;
  books:any;
  value:number=1;
  constructor(private route:ActivatedRoute,private bookser:BooksService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.booksId=params.get('id')
      this.books=this.bookser.getAllBooks().find(x=>x.id==this.booksId)
      this.bookser.bookPayments=this.books;
      console.log('compoenet launched')
    })
  }
  increase(){
    this.value+=1;
    this.bookser.booksQuantity=this.value;
  }
  decrease(){
      if(this.value > 1){
        this.value-=1;
      }
  }

}
