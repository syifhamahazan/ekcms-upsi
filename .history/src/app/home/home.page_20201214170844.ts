import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchbyareaComponent } from '../components/modals/searchbyarea/searchbyarea.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
    component: SearchbyareaComponent
    });

    await modal.present();
   }

}
