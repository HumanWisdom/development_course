import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61041Page } from './s61041.page';

describe('S61041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61041Page;
  let fixture: ComponentFixture<S61041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
