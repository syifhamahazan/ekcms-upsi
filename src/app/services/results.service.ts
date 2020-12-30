import { Injectable } from '@angular/core';

// Category Interface
// export interface ICategory {
//   title: string,
//   author: string,
//   isbn: string,
//   issn: string,
//   subject: string,
//   callno: number,
//   series: number,
// }

// Book Interface
export interface IBook {
  cover: string;
  title: string;
  author: string;
  call_no: string;
  pyear: number;
  available: number;
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }
  getBooks() {
    const books = [];

    const book1: IBook = {
      cover: '../../assets/images/book1.jpg',
      title: 'The Basics of Islamic finance fundamentals with applications in Malaysia',
      author: 'Sabariah Nordin',
      call_no: 'BP158.B9.S113B 2016 SAB',
      pyear: 2016,
      available: 1,
    }

    // let book2: IBook = {
    //   id: 2,
    //   name: 'Mens T-Shirt',
    //   price: 34,
    //   image: '../../assets/products/prod-2.png'
    // }
    // let book3: IBook = {
    //   id: 1,
    //   name: 'Womens T-Shirt',
    //   price: 40,
    //   image: '../../assets/products/prod-3.png'
    // }

    books.push(book1);

    return books;
  }
}
