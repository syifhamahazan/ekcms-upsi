import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  public books = [];

  constructor(
    private data: ResultsService,
  ) { }

  ngOnInit() {
    this.books = this.data.getBooks();
  }

}
