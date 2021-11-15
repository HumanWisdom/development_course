import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48056Page } from './s48056.page';

describe('S48056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48056Page;
  let fixture: ComponentFixture<S48056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
