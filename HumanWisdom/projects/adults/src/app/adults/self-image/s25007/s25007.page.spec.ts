import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25007Page } from './s25007.page';

describe('S25007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25007Page;
  let fixture: ComponentFixture<S25007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
