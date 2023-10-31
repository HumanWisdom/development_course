import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46042Page } from './s46042.page';

describe('S46042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46042Page;
  let fixture: ComponentFixture<S46042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
