import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53070Page } from './s53070.page';

describe('S53070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53070Page;
  let fixture: ComponentFixture<S53070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
