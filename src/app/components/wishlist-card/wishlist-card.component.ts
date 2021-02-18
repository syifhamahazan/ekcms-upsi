import { Component, OnInit } from '@angular/core';
import { MywishlistService } from 'src/app/services/mywishlist.service';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss'],
})
export class WishlistCardComponent implements OnInit {
  wishlistData: any;
  constructor(private mywishlistService: MywishlistService ) {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.mywishlistService.wishlistData$.subscribe((res: any) => {
      this.wishlistData = res;
    });
  }

}
