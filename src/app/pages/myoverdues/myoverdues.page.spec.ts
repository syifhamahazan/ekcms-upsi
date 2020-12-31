import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyoverduesPage } from './myoverdues.page';

describe('MyoverduesPage', () => {
  let component: MyoverduesPage;
  let fixture: ComponentFixture<MyoverduesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyoverduesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyoverduesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
