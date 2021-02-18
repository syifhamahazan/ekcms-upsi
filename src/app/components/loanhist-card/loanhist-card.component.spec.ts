import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanhistCardComponent } from './loanhist-card.component';

describe('LoanhistCardComponent', () => {
  let component: LoanhistCardComponent;
  let fixture: ComponentFixture<LoanhistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanhistCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanhistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
