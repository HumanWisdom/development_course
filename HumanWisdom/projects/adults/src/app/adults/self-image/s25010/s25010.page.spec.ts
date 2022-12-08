import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25010Page } from './s25010.page';

describe('S25010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25010Page;
  let fixture: ComponentFixture<S25010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
