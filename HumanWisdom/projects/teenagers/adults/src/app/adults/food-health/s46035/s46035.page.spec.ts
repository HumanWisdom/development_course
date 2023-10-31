import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46035Page } from './s46035.page';

describe('S46035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46035Page;
  let fixture: ComponentFixture<S46035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
