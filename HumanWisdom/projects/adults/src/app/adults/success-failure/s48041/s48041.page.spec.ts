import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48041Page } from './s48041.page';

describe('S48041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48041Page;
  let fixture: ComponentFixture<S48041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
