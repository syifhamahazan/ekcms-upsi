import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverdueCardComponent } from './overdue-card.component';

describe('OverdueCardComponent', () => {
  let component: OverdueCardComponent;
  let fixture: ComponentFixture<OverdueCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverdueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
