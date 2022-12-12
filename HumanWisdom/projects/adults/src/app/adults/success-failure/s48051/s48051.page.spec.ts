import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48051Page } from './s48051.page';

describe('S48051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48051Page;
  let fixture: ComponentFixture<S48051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
