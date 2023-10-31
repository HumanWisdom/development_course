import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46047Page } from './s46047.page';

describe('S46047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46047Page;
  let fixture: ComponentFixture<S46047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
