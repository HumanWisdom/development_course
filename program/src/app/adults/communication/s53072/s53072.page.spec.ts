import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53072Page } from './s53072.page';

describe('S53072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53072Page;
  let fixture: ComponentFixture<S53072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
