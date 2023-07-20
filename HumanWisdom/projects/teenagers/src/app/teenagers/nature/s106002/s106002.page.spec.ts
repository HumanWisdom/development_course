import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106002Page } from './s106002.page';

describe('S106002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106002Page;
  let fixture: ComponentFixture<S106002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
