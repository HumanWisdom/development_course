import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56031Page } from './s56031.page';

describe('S56031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56031Page;
  let fixture: ComponentFixture<S56031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
