import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfinesPage } from './myfines.page';

describe('MyfinesPage', () => {
  let component: MyfinesPage;
  let fixture: ComponentFixture<MyfinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
