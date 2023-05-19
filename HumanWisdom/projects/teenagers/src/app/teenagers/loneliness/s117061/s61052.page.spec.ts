import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61172Page } from './s61172.page';

describe('S61172Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61172Page;
  let fixture: ComponentFixture<S61172Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61172Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61172Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
