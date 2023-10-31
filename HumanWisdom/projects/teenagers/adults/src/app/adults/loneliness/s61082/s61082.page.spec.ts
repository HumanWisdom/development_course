import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61082Page } from './s61082.page';

describe('S61082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61082Page;
  let fixture: ComponentFixture<S61082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
