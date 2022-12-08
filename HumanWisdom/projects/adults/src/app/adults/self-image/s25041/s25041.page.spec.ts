import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25041Page } from './s25041.page';

describe('S25041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25041Page;
  let fixture: ComponentFixture<S25041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
