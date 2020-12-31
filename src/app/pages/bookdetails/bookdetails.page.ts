import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.page.html',
  styleUrls: ['./bookdetails.page.scss'],
})
export class BookdetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  reserveAction(){
    this.router.navigate(['./home/reservation']);
  }
}
