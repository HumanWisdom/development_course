import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53041Page } from './s53041.page';

describe('S53041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53041Page;
  let fixture: ComponentFixture<S53041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
