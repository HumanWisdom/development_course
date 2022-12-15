import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46028Page } from './s46028.page';

describe('S46028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46028Page;
  let fixture: ComponentFixture<S46028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
