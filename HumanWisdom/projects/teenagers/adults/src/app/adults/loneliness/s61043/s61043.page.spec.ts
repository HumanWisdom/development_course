import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61043Page } from './s61043.page';

describe('S61043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61043Page;
  let fixture: ComponentFixture<S61043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
