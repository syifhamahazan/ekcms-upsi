import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginAuthPage } from './login-auth.page';

describe('LoginAuthPage', () => {
  let component: LoginAuthPage;
  let fixture: ComponentFixture<LoginAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
