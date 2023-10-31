import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46051Page } from './s46051.page';

describe('S46051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46051Page;
  let fixture: ComponentFixture<S46051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
