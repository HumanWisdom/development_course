import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134175Page } from './s134175.page';

describe('S134175Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134175Page;
  let fixture: ComponentFixture<S134175Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134175Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134175Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
