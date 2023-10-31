import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46070Page } from './s46070.page';

describe('S46070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46070Page;
  let fixture: ComponentFixture<S46070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
