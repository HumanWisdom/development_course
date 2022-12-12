import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25001Page } from './s25001.page';

describe('S25001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25001Page;
  let fixture: ComponentFixture<S25001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
