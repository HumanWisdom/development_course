import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53063Page } from './s53063.page';

describe('S53063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53063Page;
  let fixture: ComponentFixture<S53063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
