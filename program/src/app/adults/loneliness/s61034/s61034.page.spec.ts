import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61034Page } from './s61034.page';

describe('S61034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61034Page;
  let fixture: ComponentFixture<S61034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
