import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28014Page } from './s106014.page';

describe('S28014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28014Page;
  let fixture: ComponentFixture<S28014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
