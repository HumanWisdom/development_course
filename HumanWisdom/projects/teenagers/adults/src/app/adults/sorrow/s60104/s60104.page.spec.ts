import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60104Page } from './s60104.page';

describe('S60104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60104Page;
  let fixture: ComponentFixture<S60104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
