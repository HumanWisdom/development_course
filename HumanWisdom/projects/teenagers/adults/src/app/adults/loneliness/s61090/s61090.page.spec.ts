import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61090Page } from './s61090.page';

describe('S61090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61090Page;
  let fixture: ComponentFixture<S61090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
