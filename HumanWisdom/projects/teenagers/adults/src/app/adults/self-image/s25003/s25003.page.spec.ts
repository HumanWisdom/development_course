import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25003Page } from './s25003.page';

describe('S25003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25003Page;
  let fixture: ComponentFixture<S25003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
