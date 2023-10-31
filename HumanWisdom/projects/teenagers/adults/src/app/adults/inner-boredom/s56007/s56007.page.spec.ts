import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56007Page } from './s56007.page';

describe('S56007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56007Page;
  let fixture: ComponentFixture<S56007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
