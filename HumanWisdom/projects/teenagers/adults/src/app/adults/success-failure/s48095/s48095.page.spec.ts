import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48095Page } from './s48095.page';

describe('S48095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48095Page;
  let fixture: ComponentFixture<S48095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
