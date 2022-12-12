import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48090Page } from './s48090.page';

describe('S48090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48090Page;
  let fixture: ComponentFixture<S48090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
