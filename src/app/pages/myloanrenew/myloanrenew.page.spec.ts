import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyloanrenewPage } from './myloanrenew.page';

describe('MyloanrenewPage', () => {
  let component: MyloanrenewPage;
  let fixture: ComponentFixture<MyloanrenewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyloanrenewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyloanrenewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
