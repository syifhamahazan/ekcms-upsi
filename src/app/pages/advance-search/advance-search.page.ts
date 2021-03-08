import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.page.html',
  styleUrls: ['./advance-search.page.scss'],
})
export class AdvanceSearchPage implements OnInit {

  public rows: Array<{ firstCol: string, secondCol: string, thirdCol: string  }> = [];
  public maxQuantity = 10;

  constructor() { }

  ngOnInit() {
  }

  public addrow(): void {
    this.rows.push({ firstCol: '', secondCol: '', thirdCol: '' });
  }

  public removerow(): void {
    this.rows.pop();
  }

  public clearrow(): void {
    this.rows.splice(0, this.rows.length);
  }

}
