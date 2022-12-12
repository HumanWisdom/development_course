import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60055Page } from './s60055.page';

describe('S60055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60055Page;
  let fixture: ComponentFixture<S60055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
