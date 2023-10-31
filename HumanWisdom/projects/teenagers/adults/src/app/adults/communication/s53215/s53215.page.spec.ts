import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53215Page } from './s53215.page';

describe('S53215Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53215Page;
  let fixture: ComponentFixture<S53215Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53215Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53215Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
