import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132215Page } from './s132215.page';

describe('S132215Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132215Page;
  let fixture: ComponentFixture<S132215Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132215Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132215Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
