import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61055Page } from './s61055.page';

describe('S61055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61055Page;
  let fixture: ComponentFixture<S61055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
