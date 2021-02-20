import { Component, OnInit } from '@angular/core';
import { MyprofileService } from 'src/app/services/myprofile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  profileData: any;
  constructor(private myprofileService: MyprofileService) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.myprofileService.profileData$.subscribe((res: any) => {
      this.profileData = res;
      console.log('inside components');
      console.log(this.profileData);
    });
  }

}

