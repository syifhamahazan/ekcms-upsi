import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyloanhistoryPage } from './myloanhistory.page';

describe('MyloanhistoryPage', () => {
  let component: MyloanhistoryPage;
  let fixture: ComponentFixture<MyloanhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyloanhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyloanhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
