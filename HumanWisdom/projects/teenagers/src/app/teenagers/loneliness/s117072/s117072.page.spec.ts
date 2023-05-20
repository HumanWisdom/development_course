import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117072Page } from './s117072.page';

describe('S117072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117072Page;
  let fixture: ComponentFixture<S117072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
