import { Component, OnInit } from '@angular/core';
import { MyloanService } from 'src/app/services/myloan.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss'],
})
export class LoanCardComponent implements OnInit {
  loanData: any;
  constructor(private myloanService: MyloanService) { }

  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.myloanService.loanData$.subscribe((res: any) => {
          this.loanData = res;
          console.log('inside components');
          console.log(this.loanData);
        });
      }
}
