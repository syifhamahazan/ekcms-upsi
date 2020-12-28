import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RbrSearchPage } from './rbr-search.page';

describe('RbrSearchPage', () => {
  let component: RbrSearchPage;
  let fixture: ComponentFixture<RbrSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbrSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RbrSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
