import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61010Page } from './s61010.page';

describe('S61010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61010Page;
  let fixture: ComponentFixture<S61010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
