import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61070Page } from './s61070.page';

describe('S61070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61070Page;
  let fixture: ComponentFixture<S61070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
