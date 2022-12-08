import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46063Page } from './s46063.page';

describe('S46063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46063Page;
  let fixture: ComponentFixture<S46063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
