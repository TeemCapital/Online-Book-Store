import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  allBooks:any;
  constructor(private bookSer:BooksService) { }

  ngOnInit(): void {
    this.allBooks=this.bookSer.getAllBooks();
    console.log(this.allBooks)
    console.log('compoenet launched')

  }

}
