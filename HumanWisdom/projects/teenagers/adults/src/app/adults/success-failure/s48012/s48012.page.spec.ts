import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48012Page } from './s48012.page';

describe('S48012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48012Page;
  let fixture: ComponentFixture<S48012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
