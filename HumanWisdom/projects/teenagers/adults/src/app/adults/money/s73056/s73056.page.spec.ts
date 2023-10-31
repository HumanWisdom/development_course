import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73056Page } from './s73056.page';

describe('S73056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73056Page;
  let fixture: ComponentFixture<S73056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
