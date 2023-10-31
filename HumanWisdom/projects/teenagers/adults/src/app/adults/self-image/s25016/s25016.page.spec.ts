import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25016Page } from './s25016.page';

describe('S25016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25016Page;
  let fixture: ComponentFixture<S25016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
