import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinesCardComponent } from './fines-card.component';

describe('FinesCardComponent', () => {
  let component: FinesCardComponent;
  let fixture: ComponentFixture<FinesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinesCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
