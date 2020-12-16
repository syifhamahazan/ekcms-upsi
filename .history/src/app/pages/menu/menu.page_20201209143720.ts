import { Component, OnInit } from '@angular/core';
import { SearchPage } from '../search/search.page';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

pages = [
  {
    title: 'Search Page',
    url: 'menu/search'
  },
  {
    title: 'My Wishlist Page',
    url: 'menu/mywishlist'
  }

];

selectedPath ='';

constructor(private router: Router){
  this.router.events.subscribe((event: RouterEvent) => {
    this,this.selectedPath = event.url;
  });
}


  ngOnInit() {
  }

}
