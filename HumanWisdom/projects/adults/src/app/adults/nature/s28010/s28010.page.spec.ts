import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28010Page } from './s28010.page';

describe('S28010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28010Page;
  let fixture: ComponentFixture<S28010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
