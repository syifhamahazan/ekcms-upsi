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
  available: string;
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
      available: '1/1',
    };

    const book2: IBook = {
      cover: '../../assets/images/book2.jpg',
      title: 'Islamic finance architecture',
      author: 'Zaharuddin Abd Rahman.',
      call_no: 'BP158.B9.Z192C 2014 ZAH',
      pyear: 2016,
      available: '1/2',
    };

    const book3: IBook = {
      cover: '../../assets/images/book3.jpg',
      title: 'Waqf Assets and the Role of Islamic Capital Market',
      author: 'Sabariah Nordin',
      call_no: 'BP158.B9.S113B 2016 SAB',
      pyear: 2016,
      available: '2/2',
    };

    const book4: IBook = {
      cover: '../../assets/images/book4.jpg',
      title: 'Maqasid al-shariah in Islamic financeby',
      author: 'Ahcene Lahsasna',
      call_no: 'BP158.B9.L184M 2013 LAH',
      pyear: 2016,
      available: '1/1',
    };

    const book5: IBook = {
      cover: '../../assets/images/book5.jpg',
      title: 'Managing fund flows, risks and derivatives',
      author: '',
      call_no: 'BP173.75.M266 2012 MAN',
      pyear: 2016,
      available: '1/2',
    };

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

    books.push(book1, book2, book3, book4, book5);

    return books;
  }
}
