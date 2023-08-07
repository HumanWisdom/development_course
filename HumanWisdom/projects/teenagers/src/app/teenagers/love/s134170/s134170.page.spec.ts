import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134170Page } from './s134170.page';

describe('S134170Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134170Page;
  let fixture: ComponentFixture<S134170Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134170Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134170Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
