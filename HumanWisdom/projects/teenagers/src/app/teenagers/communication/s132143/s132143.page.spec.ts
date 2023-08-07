import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132143Page } from './s132143.page';

describe('S132143Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132143Page;
  let fixture: ComponentFixture<S132143Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132143Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132143Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
