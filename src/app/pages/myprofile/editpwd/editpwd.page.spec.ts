import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpwdPage } from './editpwd.page';

describe('EditpwdPage', () => {
  let component: EditpwdPage;
  let fixture: ComponentFixture<EditpwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpwdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
