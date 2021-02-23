import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent implements OnInit {

  constructor(private modalContoller: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalContoller.dismiss();
  }

  searchRes(){}
}
