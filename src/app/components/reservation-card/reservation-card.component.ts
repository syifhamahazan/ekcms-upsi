import { Component, OnInit } from '@angular/core';
import { MyreservationService } from 'src/app/services/myreservation.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent implements OnInit {
  reservationData: any;

  constructor(private myreservationService: MyreservationService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.myreservationService.reservationData$.subscribe((res: any) => {
      this.reservationData = res;
    });

  }

}
