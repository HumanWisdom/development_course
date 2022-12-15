import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48050Page } from './s48050.page';

describe('S48050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48050Page;
  let fixture: ComponentFixture<S48050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
