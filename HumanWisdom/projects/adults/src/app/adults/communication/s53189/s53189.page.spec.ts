import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53189Page } from './s53189.page';

describe('S53189Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53189Page;
  let fixture: ComponentFixture<S53189Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53189Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53189Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
