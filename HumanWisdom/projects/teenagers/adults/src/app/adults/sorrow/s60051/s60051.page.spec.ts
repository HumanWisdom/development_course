import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60051Page } from './s60051.page';

describe('S60051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60051Page;
  let fixture: ComponentFixture<S60051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
