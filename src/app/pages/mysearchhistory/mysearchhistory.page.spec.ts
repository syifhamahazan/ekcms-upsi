import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MysearchhistoryPage } from './mysearchhistory.page';

describe('MysearchhistoryPage', () => {
  let component: MysearchhistoryPage;
  let fixture: ComponentFixture<MysearchhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysearchhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MysearchhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
