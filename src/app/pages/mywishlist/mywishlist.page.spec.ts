import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MywishlistPage } from './mywishlist.page';

describe('MywishlistPage', () => {
  let component: MywishlistPage;
  let fixture: ComponentFixture<MywishlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MywishlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MywishlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
