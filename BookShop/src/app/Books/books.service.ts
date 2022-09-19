import { Injectable } from '@angular/core';
import { Books } from './books.mode';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookPayments:Books[]=[];
  booksQuantity!:number;
  constructor() { }
  Books:Books[]=[
    {
      id:1,
      name:'Company of one',
      author:'PAUL JARVIS',
      desc:"In business, growth is, more or less, a by-product of success. However, a company of one doesn't care much about how things are supposed to work. Or, better, yet—it isn't interested in following these conventional rules.",
      price:20,
      imgUrl:'assets/images/book1-min.jpg'
    },
    {
      id:2,
      name:'The Picture of Dorian Gray',
      author:'OSCAR WILDE',
      desc:'A corrupt young man somehow keeps his youthful beauty, but a special painting gradually reveals his inner ugliness to all. In 1886, in Victorian London, the corrupt Lord Henry Wotton (George Sanders) meets the pure Dorian Gray (Hurd Hatfield) posing for talented painter Basil Hallward (Lowell Gilmore).',
      price:25,
      imgUrl:'assets/images/book-5.jpg'
    },
    {
      id:3,
      name:'The Two Towers',
      author:'J.R.R TOLKIEN',
      desc:"The title The Two Towers refers to Barad-dûr and Orthanc, Sauron's stronghold in Mordor and Saruman's citadel in Isengard, respectively. These two towers can be seen as a physical embodiment of the two visions of evil that Tolkien explores throughout The Lord of the Rings.",
      price:23,
      imgUrl:'assets/images/book4-min.jpg'
    },
    {
      id:4,
      name:'The Chronicles Of Narnia',
      author:'C.S LEWIS',
      desc:'The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts and talking animals. It narrates the adventures of various children who play central roles in the unfolding history of the Narnian world.The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts and talking animals. It narrates the adventures of various children who play central roles in the unfolding history of the Narnian world.',
      price:30,
      imgUrl:'assets/images/book2-min.jpg'
    },
    {
      id:5,
      name:'Milk and Honey',
      author:'RUPE KAUR',
      desc:'#1 New York Times bestseller milk and honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity. The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain.',
      price:29,
      imgUrl:'assets/images/book3-min.jpg'
    },
    {
      id:1,
      name:'Company of one',
      author:'PAUL JARVIS',
      desc:'A great Book to read!',
      price:20,
      imgUrl:'assets/images/book1-min.jpg'
    },
    {
      id:2,
      name:'The Picture of Dorian Gray',
      author:'OSCAR WILDE',
      desc:'A great Book to read!',
      price:25,
      imgUrl:'assets/images/book-5.jpg'
    },
    {
      id:3,
      name:'The Two Towers',
      author:'J.R.R TOLKIEN',
      desc:'A great Book to read!',
      price:23,
      imgUrl:'assets/images/book4-min.jpg'
    },
    {
      id:4,
      name:'The Chronicles Of Narnia',
      author:'C.S LEWIS',
      desc:'A great Book to read!',
      price:30,
      imgUrl:'assets/images/book2-min.jpg'
    },
    {
      id:5,
      name:'Milk and Honey',
      author:'RUPE KAUR',
      desc:'A great Book to read!',
      price:29,
      imgUrl:'assets/images/book3-min.jpg'
    }
  ]
  getAllBooks(){
    return [...this.Books]
  }
}
