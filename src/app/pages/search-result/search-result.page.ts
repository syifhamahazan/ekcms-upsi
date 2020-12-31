import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  public books = [];

  public selectedSegment = 'a';
  constructor(
    private data: ResultsService, private router: Router
  ) { }

  ngOnInit() {
    this.books = this.data.getBooks();
  }
  bookdetails(){
    this.router.navigate(['./home/bookdetails']);

  }

  segemntChanged(event: any){
    this.selectedSegment = event.target.value;
  }
}
